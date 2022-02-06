import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ListPage from "../Pages/ListPage";
import Layout from "./Layout";
import MovieInfoPage from "../Pages/MovieInfoPage";
import MovieCastPage from "../Pages/MovieCastPage";
import MovieReviewPage from "../Pages/MovieReviewPage";
import MovieSearchPage from "../Pages/MovieSearchPage";

function App() {
  return (
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
  );
}

export default App;
