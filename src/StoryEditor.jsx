import React, { useState } from 'react';

function StoryEditor() {
  const [storyTitle, setStoryTitle] = useState('');
  const [storyContent, setStoryContent] = useState('');
  const [savedStory, setSavedStory] = useState(null);

  const handleSave = () => {
    if (storyTitle.trim() && storyContent.trim()) {
      const newStory = { title: storyTitle, content: storyContent };
      setSavedStory(newStory);
      setStoryTitle('');
      setStoryContent('');
      alert('Your story has been saved!');
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleGenerateStory = async () => {
    const prompt = `Continue this story: ${storyContent}`;
    try {
      // Запрос на сервер, который работает на Node.js
      const response = await fetch('http://localhost:5000/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: storyContent }),
      });

      const data = await response.json();

      // Добавление сгенерированного текста в историю
      setStoryContent(storyContent + "\n\n" + data.choices[0].text);
    } catch (error) {
      console.error('Error generating story:', error);
      alert('Error generating story.');
    }
  };

  return (
    <div className="story-editor fade-in">
      <h2>Create a New Story</h2>
      <input
        className="story-input"
        type="text"
        placeholder="Enter story title..."
        value={storyTitle}
        onChange={(e) => setStoryTitle(e.target.value)}
      />
      <textarea
        className="story-textarea"
        placeholder="Write your story here..."
        value={storyContent}
        onChange={(e) => setStoryContent(e.target.value)}
      />
      <button className="save-button" onClick={handleSave}>
        Save Story
      </button>

      <button className="ai-button" onClick={handleGenerateStory}>
        Generate Story with AI
      </button>

      {savedStory && (
        <div className="saved-story">
          <h3>{savedStory.title}</h3>
          <p>{savedStory.content}</p>
        </div>
      )}
    </div>
  );
}

export default StoryEditor;
