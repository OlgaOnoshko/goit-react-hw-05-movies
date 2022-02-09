// import * as React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ListPage from "../Pages/ListPage";
import Layout from "./Layout/Layout";
// import MovieInfoPage from "../Pages/MovieInfoPage";
// import MovieCastPage from "../Pages/MovieCastPage";
// import MovieReviewPage from "../Pages/MovieReviewPage";
// import MovieSearchPage from "../Pages/MovieSearchPage";

const MovieSearchPage = lazy(() =>
  import("../Pages/MovieSearchPage/MovieSearchPage.js")
);
// .then(module => ({ default: module.MovieSearchPage }));
const MovieInfoPage = lazy(() =>
  import("../Pages/MovieInfoPage/MovieInfoPage.js")
);
// .then(module => ({ default: module.MovieInfoPage }));
const MovieCastPage = lazy(() =>
  import("../Pages/MovieCastPage/MovieCastPage.js")
);
// .then(module => ({ default: module.MovieCastPage }));
const MovieReviewPage = lazy(() => import("../Pages/MovieReviewPage.js"));
// .then(module => ({ default: module.MovieReviewPage }));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="movies" element={<MovieSearchPage />} />
          <Route path="movies/:movieID/*" element={<MovieInfoPage />}>
            <Route path="cast" element={<MovieCastPage />} />
            <Route path="reviews" element={<MovieReviewPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
