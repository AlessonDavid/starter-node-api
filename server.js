const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando db
mongoose.connect('mongodb://172.17.0.2:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// Rota
app.use('/api', require('./src/routes'));

app.listen(3000);
