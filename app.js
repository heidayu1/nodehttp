//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');

const app = express();

const hostname = '0.0.0.0';
const local = '127.0.0.1';
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
//route for vita
app.get('/vita',(req, res) =>{
    res.render('vita');
})

app.get('/home', function (req, res) {
    res.send('Welcome to Express');
});

app.get('/about', function (req, res) {
    res.send('this is about page');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${local}:${port}/`);
});

const os = require('os');
const Interface= require('readline');
let networkInterfaces = os.networkInterfaces();

function data() {
    var data = networkInterfaces['Wi-Fi']
    return data[0].cidr;
};

function data2() {
    var check = networkInterfaces['Wi-Fi']
    return check[0].cidr;
};

console.log(check); 

console.log(`Access from outside http://${data().split('/',1)}`);
// const data1=data(networkInterfaces)
// console.log(data1)
//console.log{(`Access from outside http://${data[0].cidr.split('/',1)}:3000`);)};