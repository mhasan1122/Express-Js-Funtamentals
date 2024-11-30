const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 4000;

// Set up Handlebars as the view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middleware
app.use(express.static(path.join(__dirname, 'static')));

// Use the blog routes defined in blog.js
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
