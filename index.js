var fs = require('fs');

var express = require('express')
var app = express();



app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// read file 'index.html'
fs.readFileSync('index.html');
var file_content = new Buffer(fs.readFileSync('index.html'));


app.get('/', function(request, response) {
    response.send(file_content.toString('utf-8'))
//  response.send('Hello World 2!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
    console.log(file_content.toString('utf-8'))

})
