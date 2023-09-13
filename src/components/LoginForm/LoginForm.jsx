import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from 'react-router';

export default function LoginForm({ setUser, showLogin, setShowLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      useNavigate("/dasboard")
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="LoginPage">
        <h1>Login Page</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
        <h3 onClick={() => setShowLogin(!showLogin)}>I'm new here</h3>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}