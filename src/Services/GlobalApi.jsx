import Axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "75db4c04a2615320d5b8bf288dd6d23f";

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie";

const getTrendingMovie = () => Axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId = (id) => Axios.get(`${movieByGenreBaseURL}?api_key=${api_key}&with_genres=${id}`);

export default { getTrendingMovie, getMovieByGenreId };
