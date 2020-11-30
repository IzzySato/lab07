const express = require('express');
const router = express.Router();
const newRecipes = require('../data/newRecipes');
const popularRecipes = require('../data/popularRecipes');

/* GET home page */
router.get('/new', function(req, res, next) {
  res.json(newRecipes);
});

router.get('/popularRecipes', function(req, res, next) {
  res.render('popularRecipes', {popularRecipes});
});

/* POST home page */
router.post('/comments', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  const { id, comment } = req.body;
  console.log(`comment for ${id} - ${comment}`);
  const recipe = newRecipes.find(({ id: i }) => i === parseInt(id, 10));
  console.log(JSON.stringify(recipe));
  recipe.comments.push(comment);
  res.send(['comment', req.body]);
});

module.exports = router;