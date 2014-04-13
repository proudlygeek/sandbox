var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public'));
app.get('/*', function(req, res) {
    res.sendfile("index.html");
});

app.listen(PORT);
console.log("Listening on http://127.0.0.1:"+PORT);
