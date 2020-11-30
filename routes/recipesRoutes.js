const express = require('express');
const router = express.Router();
const newRecipes = require('../data/newRecipes');
const popularRecipes = require('../data/popularRecipes');

/* GET home page */
router.get('/new', (req, res) => {
  res.json(newRecipes);
});

router.get('/popularRecipes', (req, res) => {
  res.render('popularRecipes', {popularRecipes});
});

/* POST home page */
router.post('/comments', (req, res) =>{
  res.setHeader('Content-Type', 'application/json');
  const { id, comment } = req.body;
  console.log(`comment for ${id} - ${comment}`);
  const recipe = newRecipes.find(({ id: i }) => i === parseInt(id, 10));
  console.log(JSON.stringify(recipe));
  recipe.comments.push(comment);
  res.send(['comment', req.body]);
});

module.exports = router;