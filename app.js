//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');

const app =express();

const hostname = '127.0.0.1';
const port = 3000;

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//route for home page
app.get('/',(req, res) => {
    //render index.hbs file
    res.render('index');
});

app.get('/home', function (req, res) {
    res.send('Welcome to Express');
});

app.get('/about', function (req, res) {
    res.send('this is about page');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});