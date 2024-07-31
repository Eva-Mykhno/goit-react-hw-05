import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("query") ?? "";

  const onSubmit = (newValue) => {
    if (!newValue.trim()) {
      toast.error("Search field is empty");
      return setSearchParams({});
    }

    setSearchParams({ query: newValue });
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchSearchMovie(searchValue);
        if (res.length === 0) {
          toast.error("Sorry... But there is no such film.");
        }

        setMovies(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchValue]);

  return (
    <div>
      <Toaster position="top-right" />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {<SearchForm onSubmit={onSubmit} searchValue={searchValue} />}
      {<MovieList movies={movies} />}
    </div>
  );
};
export default MoviesPage;
