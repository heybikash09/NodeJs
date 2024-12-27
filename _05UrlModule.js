const http=require('http')
const url=require('url')
var adr='http://localhost:8080/default.html?year=2017&month=february'
const q=url.parse(adr,true);
//Used to parse the url string for object represenation 
    // protocol: The URL protocol (e.g., 'http:', 'https:', 'ftp:').
    // slashes: A boolean indicating if the URL includes // after the protocol.
    // auth: The authentication information, if provided (e.g., 'username:password').
    // host: The full URL host (including port, if specified).
    // hostname: The hostname without the port.
    // port: The port specified in the URL (if any).
    // pathname: The path part of the URL (excluding the domain).
    // search: The query string part of the URL (including the ?).
    // query: The query string parsed into an object (if parseQueryString is true).
    // hash: The fragment identifier (if any)

    //-->https://www.piyushgarg.dev/

    //protocol-https
    //www.piyushgarg.dev/->domain-User friendly name of a IP address

console.log(q.host)
console.log(q.pathname)
console.log(q.search)
const qData=q.query
console.log(qData)
console.log(qData.month)

