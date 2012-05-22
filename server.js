var http = require("http");
var url = require("url");
var fs = require('fs');

var entities = {'s1' : false, 's2' : false, 's3' : false}

http.createServer(function(request, response) {

  var path = url.parse(request.url).pathname
  console.log("path: " + path);

  if (request.method == 'POST' && path.indexOf('/toggle/') == 0) {
        toggle(path, response);
  } else if (request.method == 'GET') {
    if (path.indexOf('/status') == 0) {
      writeStatus(response);
    }
    else {
        serveFile(path, response);
    }
  }

}).listen(8080);

function toggle(path, response) {
    var id = path.substring(8)
    console.log("id: " + id);
    console.log('old state: ' + entities[id])
    entities[id] = ! entities[id]
    console.log('new state: ' + entities[id])

	writeStatus(response)
}

function writeStatus(response) {
    var json = '{'
    for (var key in entities) {
        json = json + [key, entities[key]].join(":")  + ','
    }
    json = json.substring(0,json.length -1)
    json = json + '}'

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(json);
    response.end();
    console.log(json);
}

function serveFile(path, response) {
    path = path.substring(1, path.length)
    if (path.indexOf('.html') > 0) {
        console.log('serving html: ' + path)
        response.writeHead(200, {"Content-Type": "text/html"});
    }
    else if (path.indexOf('.js') > 0) {
        console.log('serving js: ' + path)
        response.writeHead(200, {"Content-Type": "application/x-javascript"});
    }
    var file = fs.createReadStream(path)
    file.on('error', function(){
        response.writeHead(404);
        response.end();
    });
    file.on('fd', function () {
    });
    file.pipe(response);
}




