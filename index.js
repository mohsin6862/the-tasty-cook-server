const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors());
app.get('/', (req, res) => {
  res.send('Chef Recipe is comming')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})