// pages/login.tsx
import { useState } from 'react';
import router, { useRouter } from 'next/router';
import '../styles.css'; // Adjust the path if necessary



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here
    if (username === 'Blona' && password === 'ToTheSky') {
        // Simulate authentication by setting a token in local storage
        localStorage.setItem('token', 'your-secret-token');
        router.push('/pdf-uploader'); // Redirect to the PDF Uploader page upon successful login
      } else {
        alert('Invalid credentials');
      }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
