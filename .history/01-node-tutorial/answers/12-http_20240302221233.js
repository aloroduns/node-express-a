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
       res.removeHeader('Welcome to the about page!');
    } else {
        //For any other url, send a 404 error message
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

//start listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running on http://localho')
})