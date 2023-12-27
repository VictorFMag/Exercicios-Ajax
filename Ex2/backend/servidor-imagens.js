port = 3000

const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/imagens', express.static('frontend/imagens'))

app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

const arrayImagens = fs.readdirSync("frontend/imagens")
let indice = 0;

app.get('/imagens', (req, res, next) => {
    if (indice>arrayImagens.length-1){
        indice = 0
    } 
    const enderecoImagem = arrayImagens[indice]
    const enderecoCompleto = "http://localhost:3000/imagens/"+enderecoImagem
    indice++
    console.log("indice: "+indice)
    res.send({enderecoImagem:enderecoCompleto})
});