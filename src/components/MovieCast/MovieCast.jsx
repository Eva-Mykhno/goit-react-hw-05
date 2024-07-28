import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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

  if (!cast) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ul>
        {cast.map((item) => (
            <li key={item.id}>
                <img src={https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg} alt="" />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
