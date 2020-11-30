const listTemplate = (list) => list.map(i => `<li>${i}</li>`).join('');

const recipeTemplate = ({
    id,
    title,
    image,
    servings,
    ingredients,
    steps,
    comments
  }) =>
  `
  <li class="recipe" >
    <h2 class="recipeTitle">${title}</h2>
    <img class="recipeImage" src="${image}" alt="${title}"/>
    <div class="recipeContent">
      <p>Servings: ${servings}</p>
      <h3 class="recipeSubTitle">Ingredients:</h3>
      <ul>${listTemplate(ingredients)}</ul>
      <h3 class="recipeSubTitle">Steps:</h3>
      <ol>${listTemplate(steps)}</ol>
      <div class="comments">
      <h4>comments:</h4>
      <ul class="commentsUl" data-id="${id}">${listTemplate(comments)}</ul>
    </div>
    <div class="commentsArea">
      <textarea class="commentTextArea" data-id="${id}" name="commentTextArea" rows="5" cols="40"></textarea>
    </div>
    <button data-id="${id}" class="btn">Add Comments</button>
    </div>
  </li>`;

const renderRecipes = (recipes, target) => {
  const html = recipes.map(recipe => recipeTemplate(recipe))
    .join('');
  $(target).html(html);
};

const loadNav = () => {
  $('#menu').click(() => {
    $('#nav').toggle();
  });

  $.ajax({
    url: '/nav',
    dataType: 'html',
    type: 'GET',
    success: function (data) {
      $('#nav').html(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
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
    success: function (data) {
      $('#popuReciGrid').html(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
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
    success: function (data) {
      renderRecipes(data, '#newReciGrid');
      $('.btn').click(function() {
        addComment(this);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#newReciGrid').text(jqXHR.statusText);
      console.log('ERROR:', jqXHR, textStatus, errorThrown);
    }
  });
};

const addComment = ({
  dataset: {
    id
  }
})=> {
  const newComments = {
    id,
    comment: $(`textarea.commentTextArea[data-id="${id}"]`).val()
  };
    $.ajax({
      url: '/recipes/comments',
      dataType: 'json',
      type: 'POST',
      data: newComments,
      success: function (data) {
        loadNewRecipes();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $('#newReciGrid').text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
};

$().ready(() => {
  loadNav();
  loadNewRecipes();
  loadPopuRecipes();
});