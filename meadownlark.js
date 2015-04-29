/**
 * Created by Zen on 2015/4/29.
 */
var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);

//404
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - NOT FOUND');
});

//500
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function (err) {
    console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});