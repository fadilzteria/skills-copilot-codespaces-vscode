// Create web server using node.js
// Create a file called app.js
// Copy the following code into app.js:
// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);
// Run app.js:
// node app.js
// Open a web browser and type in the following URL:
// http://localhost:8080
// The result should be Hello World!
// Install nodemon
// nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
// Install nodemon globally:
// npm install -g nodemon
// Run app.js using nodemon:
// nodemon app.js
// Install express
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// Install express in the current directory and save it in the dependencies list. For example:
// npm install express --save
// Create a file called server.js
// Copy the following code into server.js:
// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });
// app.listen(8080);
// Run server.js:
// node server.js
// Open a web browser and type in the following URL:
// http://localhost:8080
// The result should be Hello World!
// Install body-parser
// body-parser is a Node.js body parsing middleware.
// Install body-parser in the current directory and save it in the dependencies list. For example:
// npm install body-parser --save
// Create a file called server.js
// Copy the following code into server.js:
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.post('/', function(req, res) {
//     res.send('Hello ' + req.body.name + '!');
// });
// app.listen(8080);
// Run server.js:
// node server.js
// Open a web browser and type in the following URL:
// http://localhost:8080
// The result should be Hello !
// Install mysql
// mysql is a Node