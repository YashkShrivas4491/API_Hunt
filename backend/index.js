import express from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


fetch("https://api-hunt-1-h7k0.onrender.com/api/hunt")
  .then((res) => res.json())
  .then(console.log);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});