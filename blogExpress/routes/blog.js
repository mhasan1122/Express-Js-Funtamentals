const express = require('express');
const path = require('path');
const blogs = require('../data/blogs'); // Your blog data

const router = express.Router();

// Route to serve the main page (home)
router.get('/', (req, res) => {
  res.render('home'); // Render home.handlebars
});

// Route to display blog titles (blog list)
router.get('/blog', (req, res) => {
  res.render('blogHome', { blogs: blogs }); // Render blogHome.handlebars
});

// Route to serve a specific blog post based on its slug
router.get('/blogpost/:slug', (req, res) => {
  const slug = req.params.slug; 
  console.log(`Requested slug: ${slug}`);

  // Find the blog matching the given slug
  const myBlog = blogs.find((blog) => blog.slug === slug);

  if (myBlog) {
    // Render the blog page with dynamic content (e.g., blog details)
    res.render('blogpage', { blog: myBlog });
  } else {
    // Blog not found
    res.status(404).send('Blog not found');
  }
});

module.exports = router;
