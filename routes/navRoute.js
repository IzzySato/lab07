var express = require('express');
var router = express.Router();

const nav = [
  {link: '/newRecipes', title: 'New Recipes'},
  {link: '/popularRecipes', title: 'Popular Recipes'},
  {link: '/addRecipe', title: 'Add a new Recipe'}
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('nav',
  {
    nav
  });
});

module.exports = router;