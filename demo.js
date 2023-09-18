const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const os = require('os');
const networkInterfaces = os.networkInterfaces();
const wifi = networkInterfaces['Wi-Fi'];
const arch = os.arch();
const cpu = os.cpus();
const platform = os.platform();
const osver = os.version();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
});

console.log(
    `ip address: ${wifi[0].address},
     Architecture: ${arch},
     CPU Model: ${cpu[0].model.split('@',1)},
     & Speed :${cpu[0].speed}MHz (2.2GHz),
     OS: ${platform},
     Version: ${osver}`
);