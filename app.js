const express = require('express');
const app = express();

const routeHome = require('./routes/home');
const routeAutos = require('./routes/autos');
const routeSucursales = require('./routes/sucursales');
const routeMarcas = require('./routes/marcas');


app.listen(3000, ()=> console.log('Servidor funcionando en puerto 3000'));

app.use('/', routeHome);
app.use('/autos', routeAutos);
app.use('/marcas', routeMarcas);
app.use('/sucursales', routeSucursales);