import 'dotenv/config'
import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/home', (req, res) => res.render('./index'))

app.post('/contact', (req, res) => {
    const data = req.body()
})

app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId

    // FindByID(userId)--------------------->
    // <----------------- Info o error
    // BK prepara la información para devolverla al Cliente
    res.send(userFound)

})

app.put('/user/:userId', (req, res) => {
    const userId = req.params.userId

    // FindByID(userId)--------------------->
    // <----------------- Info o error
    // BK prepara la información para devolverla al Cliente
    res.send(userFound)

})

app.delete('/user/:userId', (req, res) => {
    const userId = req.params.userId

    // FindByID(userId)--------------------->
    // <----------------- Info o error
    // BK prepara la información para devolverla al Cliente
    res.send(userFound)

})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

// Peticiiones HTTP

// GET      : Obtener datos
// POST     : Enviar datos
// PUT      : Modificar o reemplazar
// PATCH
// DELETE   : Borrar datos

/**
 * PARA SABER QUE EL SERVIDOR SEPA QUE TIENE QUE HACER
 * ==================================================
 * 1. Necesitamos una petición.
 * 2. Ruta.
 * 3. Response
 * 
 */