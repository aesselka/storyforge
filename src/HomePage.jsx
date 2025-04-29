import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import ProjectsSection from './ProjectsSection';

function HomePage() {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleLogin = (name) => {
    if (name.trim()) {
      setNickname(name);
      navigate('/storyeditor'); // Переход на StoryEditor после ввода
    } else {
      alert('Введите ваше имя!');
    }
  };

  return (
    <div>
      {/* Welcome + форма ввода */}
      <section className="welcome-section fade-in">
        <WelcomeScreen onLogin={handleLogin} />
      </section>

      {/* Наши работы */}
      <section className="projects-section fade-in">
        <ProjectsSection />
      </section>
    </div>
  );
}

export default HomePage;
