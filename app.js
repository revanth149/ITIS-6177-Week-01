const express = require('express');

const app = express();
let port = 8080;
let host = 'localhost';

app.get('/',(req,res)=> {
    res.send("Hello World using express app")
});

app.listen(port, host, () => {
    console.log('The server is running at port', port);
});