var http = require('http');

var posts = "Welcome to the posts page"
var home = "Welcome to the home page"

function handler (request, response) {
  var endpoint = request.url
  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(home);
    response.end();
  } else if (endpoint === "/posts") {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(posts);
  response.end();
  }
}

var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening on port 3000. ready to accept requests!");
});
