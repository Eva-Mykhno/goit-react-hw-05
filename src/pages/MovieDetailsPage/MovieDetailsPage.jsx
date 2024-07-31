import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? "/movies");

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
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <div className={s.goBack}>
        <FaArrowLeftLong />
        <NavLink className={s.button} to={goBackLink.current}>
          Go Back
        </NavLink>
      </div>

      <div className={s.containerMovie}>
        <img
          className={s.img}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
        />
        <div className={s.containerInfo}>
          <h2>{movie.title}</h2>
          <p>User score: 74%</p>
          <h3> Overview </h3>
          <p>{movie.overview}</p>
          <h3> Genres </h3>
          <ul className={s.listGenres}>
            {movie.genres.map((item) => (
              <li className={s.itemGenres} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.info}>
        <h4>Additional information</h4>
        <div className={s.list}>
          <div className={s.item}>
            <BsDot />
            <NavLink to="cast">Cast</NavLink>
          </div>
          <div className={s.item}>
            <BsDot />
            <NavLink to="reviews">Reviews</NavLink>{" "}
          </div>
        </div>
      </div>
      <Suspense fallback={<h3 className={s.waitnig}>Waiting...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
