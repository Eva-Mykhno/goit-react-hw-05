import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovieCast(params.movieId);

        setCast(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [params.movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={s.list}>
        {cast.map((item) => (
          <li className={s.item} key={item.id}>
            <img
              className={s.img}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              width={250}
              alt={item.name}
            />
            <p className={s.text}>{item.name}</p>
            <p className={s.text}>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
