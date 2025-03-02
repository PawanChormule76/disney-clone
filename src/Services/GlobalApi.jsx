import Axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "75db4c04a2615320d5b8bf288dd6d23f";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


const getPopularMovie = Axios.get(`${movieBaseUrl}/movie/popular?api_key=${api_key}`);
const getMovieByGenreId=(id)=>Axios.get(`${movieByGenreBaseURL}/&with_genres=${id}`)

export default { getPopularMovie, getMovieByGenreId };
