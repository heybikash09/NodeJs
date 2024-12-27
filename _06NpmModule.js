// const http=require('http')
// const { upperCase }=require('upper-case')
// http.createServer(function(req,res)
// {
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(upperCase('Hello World !!'))
//     res.end()
// }).listen(9091)

const http = require('http');
const { upperCase } = require('upper-case'); // Use destructuring to import the `upperCase` function

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(upperCase('Hello World !!')); // Use `upperCase` function
    res.end();
}).listen(9091, () => {
    console.log('Server running at http://localhost:9091/');
});


///// It is not working some issue occure over here 