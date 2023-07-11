import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";

export const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleRegister = (e) => {
      e.preventDefault();
      // Perform registration logic and handle errors
      if (password !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        // Successful registration, redirect or perform other actions
        console.log('Registration successful!');
      }
    };
  
    return (
      <div className='Body'>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
      <form onSubmit={handleRegister}>
        <center>
        <h2>Register</h2>
        </center>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
      </div>
    );
  };
  
  const Login = () => {
    return (
      <div>
        <RegistrationForm />
      </div>
    );
  };