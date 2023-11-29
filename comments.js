// Create web server application
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Use middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Use middleware to parse application/json
app.use(express.json());

// Use middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Use middleware to parse application/json
app.use(express.json());

// Use middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Use middleware to parse application/json
app.use(express.json());

// Use middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Create an empty array of comments
let comments = [];

// Handle GET request for home page
app.get('/', (req, res) => {
    res.render('index', { comments: comments });
});

// Handle POST request for home page
app.post('/', (req, res) => {
    // Get the data from form
    let name = req.body.name;
    let comment = req.body.comment;
    let newComment = {
        name: name,
        comment: comment,
        date: new Date().toLocaleString()
    };
    // Add new comment to the beginning of the array
    comments.unshift(newComment);
    // Redirect back to the home page
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});