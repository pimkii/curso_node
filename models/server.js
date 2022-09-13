const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/user'

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }
  
  middlewares() {

    // carga de cors
    this.app.use(cors());

    // indica que el tipo de body que trabajaremos sera tipo json
    this.app.use( express.json() );

    // carga de directorio publico (se carga cuando accedes a la ruta raiz de la aplicacion '/')
    this.app.use( express.static('public') );
  }

  /**
   * Método que inicializa las rutas
   */
  routes() {

    // cargamos las rutas de los controladores que necesitemos.
    this.app.use( this.usuariosPath , require('../routes/routes') );
  }

  /**
   * Método que ejecuta la aplicación en el puerto indicado.
   */
  listen() {
    this.app.listen(this.port, () =>
      console.log("corriendo en el puerto: ", this.port)
    );
  }
}

module.exports = Server;
