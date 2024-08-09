const express = require("express");
const router = express.Router();


// Estabelecendo as rotas
router.get('/home', (req, res) =>{
    res.render('home')
})

router.get('/povos', (req, res) =>{
    res.render('povos')
})

router.get('/sobre', (req, res) =>{
    res.render('sobre')
})

router.get('/povos/tha-fene', (req, res) =>{
    res.render('tha-fene')
})

router.get('/povos/pataxo', (req, res) =>{
    res.render('pataxo')
})

router.get('/povos/aguas-belas', (req, res) =>{
    res.render('aguas-belas')
})

router.get('/povos/aldeia-velha', (req, res) =>{
    res.render('aldeia-velha')
})

router.get('/povos/barra-velha', (req, res) =>{
    res.render('barra-velha')
})

router.get('/povos/mata-medonha', (req, res) =>{
    res.render('mata-medonha')
})

module.exports = router;