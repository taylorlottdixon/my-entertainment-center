import * as moviesAPI from "./movies-api"

function successCB(data) {
	console.log("Success callback: " + data);
};
        
function errorCB(data) {
        	console.log("Error callback: " + data);
    };

export async function trendingMovies(moviesData) {
    const token = await moviesAPI.trendingMovies(moviesData);
    localStorage.setMovie('token', token);
    return getMovies();
    }