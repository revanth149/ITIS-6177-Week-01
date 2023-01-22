const http = require('http');
  
const port = 8080;
const host = 'localhost';
// Creating server 
const server = http.createServer((req, res) => {
    // Sending the response
    res.write("Hello World from nodejs server")
    res.end();
})
  

server.listen(port,host, () => {
    console.log("Server is Running on", port);
})