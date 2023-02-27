const express = require('express');
const db = require('../src/utils/database');
const cors = require('cors');
const Todos = require('./models/todos.model');
const todosRoutes = require('./routes/todos.route');
const PORT = 8000;

db.authenticate()
    .then( () => console.log('Conexion Exitosa'))
    .catch( (error) => console.log(error))

db.sync()
    .then( () => console.log('Sincronizacion Exitosa'))
    .catch( (error) => console.log(error))

const app = express();
app.use(cors());
app.use(express.json());
app.use(todosRoutes);

// app.get('/', (req, res) => {
//     res.send('Bienvenido a mi servidor');
// })

app.listen( PORT, () => console.log( `Servidor escuchando en puerto ${PORT}`) )