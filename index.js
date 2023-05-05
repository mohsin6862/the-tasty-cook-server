const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const recipes = require('./Data/RecipeData.json')
const apply = require('./Data/ApplyAsChef.json')
const features = require('./Data/Features.json')
const newRecipes =require('./Data/NewRecipes.json')
const cors = require('cors')
app.use(cors());
app.get('/', (req, res) => {
  res.send('Chef Recipe is comming')
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
})

app.get('/recipes/:id',(req,res)=>{
    const id = req.params.id;
    const selectedRecipe = recipes.find(n => n._id == id)
    res.send(selectedRecipe)
})
app.get('/apply', (req,res)=>{
    res.send(apply)
})
app.get('/features',(req,res)=>{
    res.send(features)
})
app.get('/newRecipes',(req,res)=>{
  res.send(newRecipes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})