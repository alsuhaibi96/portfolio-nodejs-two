const express = require('express');
const app     = express();
const port    = process.env.PORT|| 7600;

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('index');
});




app.listen(port);
console.log('Server is listening on port ' + port);