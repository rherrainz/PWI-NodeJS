import 'dotenv/config'
import express from 'express'
import { userRouter } from './src/routes/user.routes.js'
import { productsRouter } from './src/routes/product.routes.js'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.use('/users', userRouter)
app.use('/products', productsRouter)


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