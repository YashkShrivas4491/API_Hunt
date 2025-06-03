import express from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/api/hunt', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});