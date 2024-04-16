const http = require('http');

//create a web server
const server = http.createServer((req, res) => {
    // set content type
    res.setHeader('Content-Type', 'text/plain');

    //request url
    if (req.url === '/') {
        // if the url is '/', send a message to the browser
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
       // if the url is '/about', send a different message
       res.removeHeader('Welcom')
    }
})