var http = require('http');
var fs = require('fs');
var server = http.createServer();

fs.readFile('./index.html', function(err, html) {
    if (err) throw err;

    server.on('request', function (request, response) {
	    response.setHeader("Content-Type", "text/html; charset=utf-8");
	    if (request.method === 'GET' && request.url === '/') {
	        response.write(html);
	            response.end();
	    } else {
	            response.statusCode = 404;
	            response.write('<h1>404: Zła ścieżka!</h1>');
	            response.end();
	    }
	});

	server.listen(8080);

});

