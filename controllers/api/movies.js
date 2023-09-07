const Movie = require('../../models/movie');
import * as theMovieDb from "../../themoviedb";

module.exports = {
    getAll,
    create,
    edit,
    delete: deleteMovie,
    addFav,
    removeFav,
    viewFav,
    viewOwned,
    viewTrend,
    detail,
    addRating,
    editRating,
    removeRating,
    calcMEC,
};

function getAll() {
    for (let i = -2147483648; i < 2147483648; i++) {
        movie = theMovieDb.movies.getById({"id":i}, successCB, errorCB)
        return movie
    }
}

function successCB(data) {
	console.log("Success callback: " + data);
    return data
};
        
function errorCB(data) {
        	console.log("Error callback: " + data);
    };