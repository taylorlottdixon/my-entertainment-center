import * as moviesAPI from "./movies-api";
import movies from "../movie_ids_09_06_2023.json";

const movieids = movies.map(a => a.id)

function successCB(data) {
	console.log("Success callback: " + data);
};
        
function errorCB(data) {
        	console.log("Error callback: " + data);
    };

export async function trendingMovies(moviesData) {
    const token = await moviesAPI.trendingMovies(moviesData);
    localStorage.setMovie('token', token);
    return getMovie();
    }

export async function create(movieData) {
    const token = await moviesAPI.create(movieData);
    localStorage.setItem('token', token);
    return getMovie();
}
  
 export function getMovie() {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}