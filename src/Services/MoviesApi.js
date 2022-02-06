import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const API_KEY = "d932fb7a4d521c5d3c868a0d6ee48e67";

export async function GetTrendingMovies() {
  const responce = await axios.get(
    `${URL}trending/movie/day?api_key=${API_KEY}`
  );
  return responce.data;
}

export async function GetMovieInfo(movie_id) {
  const responce = await axios.get(
    `${URL}/movie/${movie_id}?api_key=${API_KEY}`
  );
  return responce.data;
}

export async function GetMovieCast(movie_id) {
  const responce = await axios.get(
    `${URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return responce.data;
}

export async function GetMovieReviews(movie_id) {
  const responce = await axios.get(
    `${URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return responce.data;
}

export async function GetMoviesBySearchQuery(searchQuery) {
  const responce = await axios.get(
    `${URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  return responce.data;
}
