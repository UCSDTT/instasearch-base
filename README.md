# tag-search 
Boilerplate for an instagram search tool as a starting point for TT App Team applicants

# Getting Started
1. Install Node.js
2. Fork this repository
3. run 'npm install' to install dependencies
4. run 'npm start' to start the Node.js server
5. Go to http://localhost:3000 in your web browser

# Your Task
+ Implement a simple web application that allows the user to pull up the 30 most
recent images for the tags 'thetatau', 'engineering', and 'computerscience'. 
+ Devise and Implement a simple way to switch between these tags.
+ Display the resulting images in the format of your choosing.

#Notes
+ We use [Jade](http://jade-lang.com/), an html templating language on the app, so we'd like it if you used it here (in place of standard html). You'll notice the starter views
are already written in jade. 

# Tips 
+ Retrieve images with the [Instagram API](https://instagram.com/developer/) in the backend by making HTTP GET requests to the endpoints.
+ Install a Node.js library like 'superagent' or 'request' to make HTTP requests in the backend.
+ Feel free to use frontend libaries like jQuery or Angular for javascript, or Bootstrap
for CSS.
+ Use Google.
+ Ask questions.

# Places where you might want to add your code
+ /routes/index.js
+ /views/*
+ /public/*
+ app.js

# File Structure
```
.
├── app.js
├── package.json
├── public
│   ├── images
│       └── placeholder.gif
│   ├── javascripts
│       └── index.js 
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
└── views
    ├── index.jade
    └── layout.jade
```
