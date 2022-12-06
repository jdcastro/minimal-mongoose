const express = require('express');
const mongoose = require('mongoose');
const Test = require('./schema');
const { dbStart } = require('./db');

const app = express();

const dbUrl = 'mongodb://127.0.0.1:27017/db-test'
const prueba = { propiedad1: 'Hola', propiedad2: 123 }


app.get('/', (req, res) => {
  Test.create(prueba)
  res.send('Hola mundo!');
});

// Inicia el servidor Express
app.listen(3008, () => {
  console.log('Servidor iniciado en http://localhost:3008');
});
 
dbStart(dbUrl)