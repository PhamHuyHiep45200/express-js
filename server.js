const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = 5000

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/user', (req, res) => {
  res.json({
    status: 200,
    description: "A list of users kk"
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})