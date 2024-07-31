import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { fetchMovies } from "../../services/api";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovies();
        setMovies(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
