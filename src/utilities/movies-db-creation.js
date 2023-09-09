import * as moviesAPI from "./movies-api";

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

function transferMovie(movieID) {
    let movieIn = getById({"id":movieID})
    const newMovie = {}
    
    newMovie["_id"] = movieIn["id"]
    newMovie["title"] = movieIn["title"]
    newMovie["tagline"] = movieIn["tagline"]
    newMovie["overview"] = movieIn["overview"]
    newMovie["released"] = movieIn["release_date"]
    newMovie["categories"] = []
    newMovie["length"] = movieIn["runtime"]
    newMovie["cast"] = []
    newMovie["mecRatingAgg"] = null
    newMovie["mecUserRating"] = null
    newMovie["favorite"] = false
    newMovie["owned"] = false
}

function fullDBMovies(movieids) {
    const allMovies = []
    for (let i = 0; i < movieids.length; i++) {
        let newMovie = transferMovie(movieids[i])
        allMovies.push(newMovie)
    }
    let jsonString = JSON.stringify(allMovies);

    fs.writeFile('data.json', jsonString, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('File written successfully');
        }
      })   
}

function getById(movieID){
    const url = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWNmMWNiYWVjNGEyMTg0OWJkOWRmNjBhZDYxNmMyYyIsInN1YiI6IjY0ZjI1ZGJjOTdhNGU2MDBjNDg3NzI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DBk1Bsp6baCOMUzq-ex3wiTthol8h6J0fTu5Z-IYq6g'
        }
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
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