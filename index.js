const express = require('express');
const app = express();
const port = 3030; // internal port

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
