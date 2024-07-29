import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovieReviews(params.movieId);
        setReviews(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [params.movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ul>
        {reviews.length ? (
          reviews.map((item) => (
            <li key={item.id}>
              <p>{item.author}:</p>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
