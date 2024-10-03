const express = require('express');
const path = require('path');
const ofx = require('ofx-convertjs'); // Import the ofx-convertjs package

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'pages')));

// Define a route to expose the OFX result as JSON
app.get('/convert-to-ofx', (req, res) => {
  const json = { id: 1, name: 'json' };
  const data = ofx.toOfx(json);
  
  res.json({ result: data });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
