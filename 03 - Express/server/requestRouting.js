var express = require('express');
var path = require('path')
var Router = express.Router();

var viewsPath = path.join(__dirname, '../public/');

Router.get('/users', function(req, res){
    res.sendFile(viewsPath + 'users.html');
    //res.end();
});

Router.get('/admin', function(req, res){
    res.sendFile(viewsPath + 'admin.html');
    //res.end();
});
Router.get('/dashboard', function(req, res){
    res.sendFile(viewsPath + 'dashboard.html');
    //res.end();
});
Router.all('/*', function(req, res){
    res.send('No se encontró el recurso');
    //res.end();
});

module.exports = Router;
