const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Route to handle POST request
app.post('/api/data', (req, res) => {
  const { name, email } = req.body; // Destructure the data from the request body
  
  // Log the received data (optional for testing)
  console.log(`Received data: Name = ${name}, Email = ${email}`);

  // Respond with a success message
  res.json({ message: 'Data received successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
