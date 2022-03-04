const express = require('express')
const app = express()
const port = 3000

// Middleware que viene en Express que analiza las solicitudes entrantes con el metodo JSON basado en BodyParser 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})


app.listen(port, () => {
    console.log(`Server UP corriendo en http://localhost:${port}`)
})