const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT //25060

});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.exports = connection;