import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    //Placeholder for login logic
    console.log('Logging in with: ', { username, password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //Placeholder for registration logic
    console.log('Registering with: ', { username, password });
  };

  return (
    <div className='login-container'>
      <h1>A La Rotten Tomato</h1>
      {isRegistering ? (
        <form onSubmit={handleRegister}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} //placeholder for submiting username
          />
          <input
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setUsername(e.target.value)} //placeholder for submiting password
          />
          <button type='submit'>Register</button>
          <p onClick={() => setIsRegistering(false)} />
          Already have an account? Login here
          <p />
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} //placeholder for submiting username
          />
          <input
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setUsername(e.target.value)} //placeholder for submiting password
          />
          <button type='submit'>Log In</button>
          <p onClick={() => setIsRegistering(true)}>New user? Register here</p>
        </form>
      )}
    </div>
  );
};
export default Login;
