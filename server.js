var http = require('http');
var fs = require('fs');


function handler (request, response) {

  var endpoint = request.url

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }
}

var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening on port 3000. ready to accept requests!");
});
