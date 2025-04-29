import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [nickname, setNickname] = useState('');

  const handleLogin = () => {
    if (nickname.trim()) {
      onLogin(nickname);
    } else {
      alert('Please enter your name!');
    }
  };

  return (
    <div className="login-screen fade-in">
      <h1 className="big-title">Welcome to StoryForge</h1>
      <input
        type="text"
        placeholder="Enter your name..."
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="input-field"
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
