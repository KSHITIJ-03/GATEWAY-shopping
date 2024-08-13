const express = require('express')
const proxy = require('express-http-proxy')
const cors = require('cors')
const app = express()
const morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/shopping', proxy('127.0.0.1:8003'))
app.use('/customer', proxy('127.0.0.1:8001'))
app.use('/', proxy('127.0.0.1:8002')) // root route is for products


const PORT = 8000
app.listen(PORT, () => {
    console.log('gateway on : ' + PORT);
})
