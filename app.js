const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./routes/user')
const companies = require('./routes/company')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.use('/users', users)
app.use('/companies', companies)

app.listen(8000)
