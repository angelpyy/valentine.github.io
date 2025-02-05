const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from root directory
app.use(express.static('./'));

// Handle food selections
app.post('/submit-food', (req, res) => {
  console.log('Food selections:', req.body.food);
  res.redirect('valentine.github.io/dessert.html');
});

// Handle dessert selections
app.post('/submit-dessert', (req, res) => {
  console.log('Dessert selections:', req.body.dessert);
  res.redirect('valentine.github.io/activities.html');
});

// Handle activity selections
app.post('/submit-activities', (req, res) => {
  console.log('Activity selections:', req.body.activities);
  res.redirect('valentine.github.io/lastpage.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});