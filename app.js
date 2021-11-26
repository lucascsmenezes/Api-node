const express = require('express');
const server = express()
const fs = require('fs')

server.get('/clientes', (req, res) =>{
    return res.json({clientes})
})

server.listen(8081, ()=>{
    console.log("Servidor rodando")
})

const data = fs.readFileSync('./src/data/user.json', 'utf-8')

const clientes = JSON.parse(data); 