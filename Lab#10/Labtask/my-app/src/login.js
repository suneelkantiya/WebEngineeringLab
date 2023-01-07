import React, { useState } from 'react';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    if (username === 'zawwar' && password === 'zawwar123') {
      setErrorMessage('');
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Invalid username or password');
      setIsLoggedIn(false);
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url(./background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {isLoggedIn ? (
        <div style={{textAlign: 'center'}}>
          <p>You are logged in!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{background: 'white', border: '2px solid #ccc', borderRadius: '5px', padding: '20px', width: '400px'}}>
          <h3 style={{textAlign: 'center'}}>Login</h3>
          <label htmlFor="username" style={{display: 'block', margin: '10px 0'}}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            style={{display: 'block', width: '90%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}
          />
          <label htmlFor="password" style={{display: 'block', margin: '10px 0'}}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            style={{display: 'block', width: '90%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}
          />
          <button type="submit" style={{display: 'block', margin: '10px auto', width: '100%', height: '40px', background: '#0099ff', border: 'none', borderRadius: '5px', color: 'white', fontWeight: 'bold'}}>Log In</button>
          {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}

export default login
