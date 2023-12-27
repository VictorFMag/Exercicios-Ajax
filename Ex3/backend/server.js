port = 3000

const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

let contSim = 0;
let contNao = 0;

app.get('/contador', (req, res, next) => {
    res.send({ "sim": contSim, "nao": contNao })
});

app.post('/contador', (req, res, next) => {
    const { escolha } = req.body;

    if (escolha === 'sim') {
        contSim++;
    } else if (escolha === 'nao') {
        contNao++;
    }

    res.send({ "sim": contSim, "nao": contNao })
});