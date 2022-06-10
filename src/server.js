require('dotenv').config({path:'.env'});
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const routes = require('./routes');

const server = express();
server.use(cors());
server.use(express.json());

server.use('/api', routes);

server.listen(PORT, () => {
    console.log(`servidor rodando em: http://localhost:${PORT}`);
})