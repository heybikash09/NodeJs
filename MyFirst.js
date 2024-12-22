//http--> its a module 
var http = require('http');
//Now application has access to the http and now it can create the server
var dt=require("./MyFirstModuleFile") 
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //1-->its for if server is supposed to be displayed as HTML, 
    //2-->  200 means that all is OK, the second argument is an object containing the response headers.
    //3-->req argument that represents the request from the client
    //4-->
    res.write("The time now is "+dt.MyDateTime());
    res.write("The http url request by the user is ::-"+req.url)
    res.end();
}).listen(8080)