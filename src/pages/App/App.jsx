import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import * as moviesdb from "../../data.json";
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage user={user} moviesdb={moviesdb} />} />
            <Route path="/movies" element={<MoviesListPage moviesdb={moviesdb} user={user} setUser={setUser} />} />
            {/* <Route /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}