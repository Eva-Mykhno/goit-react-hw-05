import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

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
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {isLoading && <Loader />}
      {error && ErrorMessage}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
        <NavLink to={cast}>Cast</NavLink>
        <Navlink to={reviews}>Reviews</Navlink>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
