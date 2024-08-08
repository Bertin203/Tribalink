const express = require("express");
const router = express.Router();


// Estabelecendo as rotas
router.get('/home', (req, res) =>{
    res.render('home')
})

router.get('/povos', (req, res) =>{
    res.render('povos')
})

router.get('/povoados', (req, res) =>{
    res.render('povoados')
})

router.get('/sobre', (req, res) =>{
    res.render('sobre')
})

router.get('/povo', (req, res) =>{
    res.render('povo_selecionado')
})

module.exports = router;