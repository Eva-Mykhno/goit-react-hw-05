import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.module.css";

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
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
