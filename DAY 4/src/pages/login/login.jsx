import React, { useState } from 'react';
import { useNavigate,Link} from "react-router-dom";

import "./login.css";

import { Shop } from '../shop/shop';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic and handle errors
    if (username === 'admin' && password === '1234567') {
      // Successful login, redirect or perform other actions
      console.log('Login successful!');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='Body'>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
    <form onSubmit={handleLogin}>
      <h1>LOGIN</h1>
      <div>
        <label>USERNAME:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}

        />
      </div>
      <div>
        <label>PASSWORD:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
    </div>
  );
};
const Login = () => {
    return (
      <div>
        <LoginForm />
      </div>
    );
};


