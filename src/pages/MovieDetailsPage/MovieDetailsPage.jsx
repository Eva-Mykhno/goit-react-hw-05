import { useEffect, useState } from "react";
import fetchMovieDetails from "../../services/fetchMovieDetails";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMovieDetails(params.movieId).then((data) => setMovie(data));
    console.log(params.movieId);
  }, [params.movieId]);

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieDetailsPage;
