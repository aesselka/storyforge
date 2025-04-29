import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Welcome + Projects
import StoryEditor from './StoryEditor';

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<HomePage />} />

        {/* Страница для написания истории */}
        <Route path="/storyeditor" element={<StoryEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
