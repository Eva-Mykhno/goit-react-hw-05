import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovieDetails(params.movieId);
        setMovie(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [params.movieId]);

  if (!movie) {
    return <Loader />;
  }

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <div>
        <Link to={goBackRef.current}>Go Back</Link>
      </div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>User score: 74%</p>
      <h3> Overview </h3>
      <p>{movie.overview}</p>
      <h3> Genres </h3>
      <ul>
        {movie.genres.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div>
        <h4>Additional information</h4>
        <div>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      </div>
      <Suspense fallback={<h3>Waiting...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
