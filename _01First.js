//http--> its a module 
var http = require('http');
//Now application has access to the http and now it can create the server

var dt=require("./Math") 
// "./" using for file existing in directory if we don't use "./" it find the module in node modules 
console.log(dt(3,5))

http.createServer(function (req, res) {
    //Send http header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //1-->upper line is for server is supposed to be displayed as HTML, 
    //2-->200 means that all is OK, the second argument is an object containing the response headers.
    //3-->req argument that represents the request from the client
    res.write("The time now is "+dt.MyDateTime());
    res.write("Hello World");
    res.write("The http url request by the user is ::-"+req.url)
    res.end()
}).listen(8080)
//server.listen(port number,funcion body);
//this is the server listen method structure