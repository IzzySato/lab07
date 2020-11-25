var express = require('express');
var router = express.Router();
const newRecipes = require('../data/newRecipes');
const popularRecipes = require('../data/popularRecipes');

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.json(newRecipes);
});

router.get('/popularRecipes', function(req, res, next) {
  res.render('popularRecipes', {popularRecipes});
});

module.exports = router;