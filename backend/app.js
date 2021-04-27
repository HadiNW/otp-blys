const express = require('express')
const app = express()

const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
app.use(cors())
app.use(express.json())



const apiRoutes = require('./router/index')

app.use('/api/v1', apiRoutes)

app.get('/ping', (req, res) => {
  res.send('PONG')
})

const port = 7777
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})