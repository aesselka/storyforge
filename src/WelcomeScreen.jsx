import React, { useState } from 'react';

function WelcomeScreen({ onLogin }) {
  const [nicknameInput, setNicknameInput] = useState('');

  const handleSubmit = () => {
    onLogin(nicknameInput);
  };

  return (
    <div className="welcome-container">
      {/* Левая часть — текст */}
      <div className="welcome-content">
        <h1 className="big-title">Привет, мы — StoryForge.</h1>
        <p className="subtitle">
          Платформа для создания и прохождения уникальных историй.  
          Делитесь своим творчеством и исследуйте фантастические миры других авторов.
        </p>

        <div className="login-form">
          <input
            type="text"
            placeholder="Введите ваше имя..."
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            className="input-field"
          />
          <button className="login-button" onClick={handleSubmit}>
            Войти
          </button>
        </div>
      </div>

      {/* Правая часть — картинка */}
      <div className="welcome-image">
        <img src="/picture.JPG" alt="Story illustration" />
      </div>
    </div>
  );
}

export default WelcomeScreen;
