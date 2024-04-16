const http = require('http');

//create a web server
const server = http.createServer((req, res) => {
    // set content type
    res.setHeader('Content-Type', 'tex')
})