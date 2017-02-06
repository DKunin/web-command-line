'use strict';

const express = require('express');
const execa = require('execa');
const app = express();
const port = 4949;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/command/:command', function(req, res) {
    const { options } = req.query;
    execa.shell(req.params.command + ' ' + (options ? options : ''))
        .then(result => res.send(result.stdout));
});

app.get('/silent/:command', function(req, res) {
    const { options } = req.query;
    execa.shell(req.params.command + ' ' + (options ? options : ''))
        .then(() => res.send('ok'));
});

app.listen(port);

console.log(`Listening on port ${port}`);