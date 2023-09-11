export async function fetchPoster(movieid, posterPath) {
    const fetch = require('node-fetch');

    const url = `http://image.tmdb.org/t/p/original${posterPath}`;
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