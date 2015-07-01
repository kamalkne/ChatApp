var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

var chatServer = require('./lib/chat_server');


function send404(response) {
    response.writeHead(404, {"content-Type": 'text/plain'});
    response.write('Error 404: Requested resource not found.');
    response.end();
};

function sendFile(response, filePath, fileContents) {
    response.writeHead(200, {"content-Type": mime.lookup(path.basename(filePath))});
    response.end(fileContents);
};

function serveStatic(response, cache, absPath) {
    if(cache[absPath]){
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function(exists) {
            if(exists) {
                fs.readFile(absPath, function(err, data) {
                    if(err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404(response);
            }
        });
    }
};

var server = http.createServer(function(requset, response) {
    var filePath = false;
    if(requset.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + requset.url;
    }
    var absPath = './' + filePath;
    serveStatic(response, cache, absPath);
});

server.listen(3000, function() {
    console.log("Server listning on port 3000. :)")
});

chatServer.listen(server);