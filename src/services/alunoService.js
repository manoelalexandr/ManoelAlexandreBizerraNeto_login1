const db = require('../db');

module.exports = {

    findAll: () => {
        return new Promise((accept, reject) => {
            
            db.query('SELECT * FROM alunos', (error, results) => {
                if(error) { reject(error); return;}
                accept(results);
            });
        });
    },

    findById: (id) => {
        return new Promise((accept, reject) => {

            db.query(`SELECT name, email, fktipo FROM alunos WHERE id = ${id}`,(error, results) =>{
                if(error) { reject(error); return;}
                if(results.length > 0){
                    accept(results[0]);                    
                }else{
                    accept(false);
                }     
            });
        });
    },

    insertAluno: (name,email, password, tipo) => {
        return new Promise((accept, reject) => {
            
            db.query(`INSERT INTO alunos (name, email, password, fkTipo) VALUES ('${name}','${email}','${password}',${tipo})`,(error, results) =>{
                if(error) { reject(error); return;}
                accept(results.insertId);   
                }
            );
        });
    }
};