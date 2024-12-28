const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to Express with EJS!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', message: 'This is the About Page.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
