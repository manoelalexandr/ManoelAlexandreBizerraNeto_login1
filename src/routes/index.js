const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

router.get('/alunos', alunoController.findAll)
router.get('/aluno/:id', alunoController.findById)
router.post('/aluno', alunoController.insertAluno)

module.exports = router;