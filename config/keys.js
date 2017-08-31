// VARIABLES PARA PRODUCCION
if (process.env.NODE_ENV === 'production') {
  // Estamos en producción devolvemos las keys de prod
  module.exports = require('./prod');
} else {
  // Estamos en desarrollo devolvemos las keys de devolvemos
  module.exports = require('./dev');
}
