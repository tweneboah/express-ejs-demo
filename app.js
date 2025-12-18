const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('welcome', { title: 'Welcome' });
});

// About route
app.get('/about', (req, res) => {
  const appInfo = {
    name: 'Express EJS App',
    version: '1.0.0',
    description: 'Express.js application with EJS template engine',
    techStack: ['Node.js', 'Express.js', 'EJS', 'JavaScript']
  };
  res.render('about', { title: 'About', appInfo });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

