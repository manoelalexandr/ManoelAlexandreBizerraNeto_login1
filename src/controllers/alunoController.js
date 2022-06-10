const alunoService = require('../services/alunoService');
const validator = require('../utils/validator');

const DEFAULT_USER_TYPE = 1;

module.exports = {

    findAll: async(req, res) => {
        let json = {error:'', result:[]};

        let alunos = await alunoService.findAll();

        for(let i in alunos){
            json.result.push({
               id: alunos[i].id,
               name: alunos[i].name,
               email: alunos[i].email 
            });
        }
        res.json(json);
    },

    findById: async(req, res) => {

        const json = {error:[], result:{}};
        try {
            const {id} = req.params;
            const aluno = await alunoService.findById(id);
            if (aluno) json.result = aluno;
        } catch (error) {
            json.error.push(error);
        } finally{
            res.json(json); 
        }
       
    },

    insertAluno: async(req, res) => {

        const json = {error:[], result:{}};

        const {name, email, password, repassword} = req.body; 
        
        if (!validator.isEqual(password, repassword)){
            json.error.push('Senhas não são iguais');
            return res.send(json)
        }
        
        if(name && email && password){
            let alunoId = await alunoService.insertAluno(name, email, password, DEFAULT_USER_TYPE);
            json.result = {
                id : alunoId,
                name,
                email,
                password,
                DEFAULT_USER_TYPE
            };
        }else{
            json.error.push('Campos não enviados');
        }

        return res.json(json);
    }

}