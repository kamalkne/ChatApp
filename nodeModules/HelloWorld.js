/*http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello World..\n');
    }
    if(req.url === '/postex') {
        if(req.method === 'post') {
            console.log("yeah bitch....!");
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('Hello World in Post K baad\n');
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<html><head><title>Y kahaan aa gaye hum</title></head><body><form action="/postex" method="post"><h4>Yoon hi sath chalte chalte</h4><button type="submit">lolwa</button></form></body></html>\n');
    }
}).listen(3000);*/

var http = require('http');
console.log('Server running at http://localhost:3000/');