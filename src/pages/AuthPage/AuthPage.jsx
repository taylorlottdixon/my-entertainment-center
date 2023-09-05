import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} /> : <SignupForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} />}
    </main>
  );
}