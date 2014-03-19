var http = require('http'); //handles http requests

var myServer = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Node\n");
}); //create a server

myServer.listen(3000);
console.log("Go to localhost:3000 on your browser");