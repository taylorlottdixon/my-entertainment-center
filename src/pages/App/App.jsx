import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import { movies } from "../../data.js";
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/movies" element={<MoviesListPage user={user} setUser={setUser} movies={movies} />} />
            {/* <Route /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}