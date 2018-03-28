var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

var nice = ["You're sooooo good looking", "Nice job!", "You heinie is breathtaking", "I love lamp"];

var mean = ["What a dick, screw you!", "You suck", "You look like a blueberry", "Your hair looks stupid"];

var server1 = http.createServer (function(request, response){
    var random = Math.floor(Math.random() * nice.length);
    response.end(nice[random]);
    console.log(nice[random]);
    
});

var server2 = http.createServer (function(request, response){
    var random = Math.floor(Math.random() * mean.length);
    response.end(mean[random]);
    console.log(mean[random]);
});

server1.listen(PORT1, function(){
    console.log("Server listening on http://localhost:" + PORT1);
});

server2.listen(PORT2, function(){
    console.log("Server listening on http://localhost:" + PORT2);
});