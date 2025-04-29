const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 5000;

// Настройка OpenAI API
const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',  // Используй свой API-ключ
});
const openai = new OpenAIApi(configuration);

// Настройка парсинга JSON
app.use(express.json());

// Обработчик для AI генерации
app.post('/generate-story', async (req, res) => {
  console.log("Received prompt:", req.body.prompt);  // Логирование полученного запроса
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error generating story:', error); // Логирование ошибки
    res.status(500).send('Error generating story');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
