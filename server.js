var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: './public/',
    port: 3333
});

//start the server, server.start will take a callback function
server.start(function(){
    console.log('server started on port ' + server.port);
});