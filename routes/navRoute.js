var express = require('express');
var router = express.Router();

const nav = [
  {id: 'popu', link: '/popularRecipes', title: 'Popular Recipes'},
  {id: 'addReci', link: '/addRecipe', title: 'Add a new Recipe'}
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('nav',
  {
    nav
  });
});

module.exports = router;