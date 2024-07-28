import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.module.css";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<h3>Waiting...</h3>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
