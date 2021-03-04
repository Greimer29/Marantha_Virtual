const express = require('express');
const app = express();
const path = require('path');

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.join(__dirname, 'public');

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, console.log('Servidor activo en el puerto 3000'));