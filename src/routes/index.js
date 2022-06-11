const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

router.get('/aluno/:id?', alunoController.findById);
router.get('/alunos', alunoController.findAll);
router.post('/alunos', alunoController.insertAluno);

module.exports = router;