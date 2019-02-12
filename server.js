var http = require('http');

var message = "request received, you're reading the response!"

function handler (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(message);
  response.end();
}

var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening on port 3000. ready to accept requests!");
});
