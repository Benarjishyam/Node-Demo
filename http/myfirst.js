var http = require('http');
var dt = require('./mymodule.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //If the response from the HTTP server is supposed to be displayed as HTML, 
  //you should include an HTTP header with the correct content type:
  res.write("The date and time are currently: " + dt.myDateTime()); //write a response to the client
  res.write(req.url);  //Pulling info from req parameter
  res.end('\nHello World!');  //end the response
  
}).listen(8080);

//  http://localhost:8080/summer
//  Will produce this result:
//   /summer


/* Definition and Usage
-> The HTTP module provides a way of making Node.js transfer data over HTTP (Hyper Text Transfer Protocol).
-> HTTP Properties and Methods
Method	                   Description
createClient()	Deprecated. Creates a HTTP client
createServer()	Creates an HTTP server
get()	        Sets the method to GET, and returns an object containing the user's request
globalAgent	    Returns the HTTP Agent
request()	    Returns an object containing the user's request
*/