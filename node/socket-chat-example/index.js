var app     = require('express')(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });
});

http.listen(3000, function() {
    console.log('Listening on *:3000');
});
