const express = require('express')
const app = express()

app.use(express.json())


const apiRoutes = require('./router/index')

app.use('/api/v1', apiRoutes)

app.get('/ping', (req, res) => {
  res.send('PONG')
})

const port = 6666
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})