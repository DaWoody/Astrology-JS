var express = require('express');

var app = express();

/*
app.get('/', function(req, res){
    res.send('Okies');
});
*/

app.use(express.static('public'));


app.listen(3000, function(){
    console.log('Server started on port 3000');
});