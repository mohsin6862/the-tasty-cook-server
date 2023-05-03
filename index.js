const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const recipes = require('./Data/RecipeData.json')
const apply = require('./Data/ApplyAsChef.json')
const cors = require('cors')
app.use(cors());
app.get('/', (req, res) => {
  res.send('Chef Recipe is comming')
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
})
app.get('/apply', (req,res)=>{
    res.send(apply)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})