const basicAuth = require('basic-auth');

module.exports = function(req, res, next) {
  const user = basicAuth(req);

// buscar en la base de datos el usuario y comprobar sus credenciales 

if (!user || user.name !== 'admin' || user.pass !== '1234')
{
  res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
  return res.sendStatus(401);
}

next();
}

