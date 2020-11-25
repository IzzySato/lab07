const listTemplate = (list) => list.map(i => `<li>${i}</li>`).join('');

const recipeTemplate = ({title, image, servings, ingredients, steps}) => 
  `
  <li class="recipe" >
    <h2 class="recipeTitle">${title}</h2>
    <img class="recipeImage" src="${image}" alt="${title}"/>
    <p>Servings: ${servings}</p>
    <h3>Ingredients:</h3>
    <ul>${listTemplate(ingredients)}</ul>
    <h3>Steps:</h3>
    <ul>${listTemplate(steps)}</ul>
  </li>`;

  const renderRecipes = (recipes, target) => {
    const html = recipes.map(recipe => recipeTemplate(recipe))
    .join('');
    $(target).html(html);
  };

  const loadNav = () => {
    $.ajax({
      url: '/nav',
      dataType: 'html',
      type: 'GET',
      success: function(data){
        $('#nav').html(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          $("#popuReciGrid").text(jqXHR.statusText);
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  };

  const loadPopuRecipes = () => {
    $.ajax({
      url: '/recipes/popularRecipes',
      dataType: 'html',
      type: 'GET',
      success: function(data){
        $('#popuReciGrid').html(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          $("#popuReciGrid").text(jqXHR.statusText);
          console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  };

const loadNewRecipes = () => {

  $.ajax({
    url: '/recipes/new',
    dataType: 'json',
    type: 'GET',
    success: function(data){
      renderRecipes(data, '#newReciGrid');
    },
      error: function(jqXHR, textStatus, errorThrown) {
      $('#newReciGrid').text(jqXHR.statusText);
      console.log('ERROR:', jqXHR, textStatus, errorThrown);
  }
  });
};

$().ready(() => {
  console.log('ready');
  loadNav();
  loadNewRecipes();
  loadPopuRecipes();
  });