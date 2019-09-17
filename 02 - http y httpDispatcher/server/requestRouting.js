var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();
function handleRequest(req, res){
    var url = req.url;
    switch (url) {
        case '/users':
            res.end('Está en el módulo de Usuarios');
            break;
        case '/admin':
            res.end('Está en el módulo de Administadores');
            break;
        case '/dashboard':
            res.end('Está en el módulo de Dashboard');
            break;
        default:
            res.end('Recurso no encontrado');
            break;
    }
    /*dispatcher.onGet('/users', function(req, res){
        //res.writeHead(200, {'Content-type':'text/plain'});
        res.end('Estás en el módulo de Usuarios');
    });
    dispatcher.onGet('/admin', function(req, res){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.end('Estás en el módulo de Administradores');
    });
    dispatcher.onGet('/dashboard', function(req, res){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.end('Estás en el módulo de Dashboard');
    });
    dispatcher.onError(function(req, res){
        res.writeHead(400);
        res.end('Recurso no encontrado');
    });

    dispatcher.dispatch(req, res);*/
}

module.exports = handleRequest;
