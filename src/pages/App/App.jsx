import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import * as moviesAPI from '../../utilities/movies-api';
import * as actorsAPI from '../../utilities/actors-api';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [moviesList, setMoviesList] = useState([]);
  const [actorsList, setActorsList] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const movies = await moviesAPI.getAll();
      setMoviesList(movies);
    }
    async function getActors() {
      const actors = await actorsAPI.getAll();
      setActorsList(actors);
    }
    console.log(moviesList)
    getMovies();
    getActors();
  }, []);

  console.log(moviesList)
  console.log(actorsList)

  return (
    <main className="App">
          <NavBar user={user} />
          <Routes>
            <Route path="/*" element={<MoviesListPage moviesList={moviesList} user={user} setUser={setUser} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} moviesList={moviesList} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage actorsList={actorsList} moviesList={moviesList} user={user} />} />
            <Route path="/actors/:actorName" element={<ActorDetailPage actorsList={actorsList} moviesList={moviesList} user={user} />} />
            <Route path="/signin" element={<AuthPage setUser={setUser} />} />
          </Routes>
    </main>
  );
}