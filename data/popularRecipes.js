const popularRecipes = [
  {
    title: 'Fried Chicken',
    image: '/images/friedChicken.jpg',
    servings: 24,
    ingredients: [
      '1 (4 pound) chicken, cut into pieces',
      'salt and pepper to taste',
      'salt and freshly ground black pepper to taste',
      '1 cups all-purpose flour for coating'
    ],
    steps: [
      '1. In a large skillet, heat oil over medium heat. Salt and pepper chicken pieces to taste, then roll in flour to coat. Place chicken pieces in skillet and fry on medium heat until one side is golden brown, then turn and brown other side until chicken is no longer pink inside and its juices run clear. Drain on paper towel and serve!'
    ],
    comments: []
  },
  {
    title: 'Best Hamburger Ever',
    image: '/images/hamburger.jpg',
    servings: 8,
    ingredients: [
      '1 egg',
      '1 pounds lean ground beef',
      '1 teaspoon dried oregano',
      '1 cup buttermilk'
    ],
    steps: [
      '1. Preheat oven to 350 degrees (175 degrees C).',
      '2. In a large bowl, mix together the ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper. Form into 4 patties.',
      '3. Grill patties for 5 minutes per side on the hot grill, or until well done. Serve on buns with your favorite condiments.'
    ],
    comments: []
  },
  {
    title: 'Spagetti',
    image: '/images/spaghetti.jpg',
    servings: 4,
    ingredients: [
      '4 cups penne pasta',
      '5 teasppns olive oil',
      '4 cloves garlic',
      '1 medium onion diced',
      '1 (16 ounce) can diced tomatoes with green chilies, drained',
      '1/2 lemon, juiced',
      '1 pound uncooked medium shrimp, peeled and deveined',
      '1/4 cup chopped fresh parsley',
      'salt, to taste',
      'ground black pepper, to taste',
      '1 pinch crushed red pepper flakes, or to taste',
      '1 teaspoon grated Parmesan cheese, or to taste'
    ],
    steps: [
      '1. Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Once the water is boiling, stir in the penne, and return to a boil. Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 11 minutes. Drain well in a colander set in the sink.',
      '2. Heat the olive oil in a skillet over medium heat. Stir in the garlic and onion; cook and stir until the onion has softened and turned translucent, about 5 minutes. Stir in the tomatoes; simmer until heated through, about 5 minutes more. Add the lemon juice and shrimp. Cook and stir until the shrimp are bright pink on the outside and the meat is no longer transparent in the center, about 5 minutes. Stir in the parsley, then season with salt, pepper, and red pepper flakes. Serve shrimp and sauce over prepared penne pasta. Sprinkle with Parmesan cheese.',
    ],
    comments: []
  },
  {
    title: 'Sunday Dinner',
    image: '/images/sundayDinner.jpg',
    servings: 16,
    ingredients: [
      '1/2 cup butter',
      '1 cup white sugar',
      '2 eggs',
      '1 teaspoon vanilla extract',
      '1/3 cup unsweetened cocoa powder',
      '1/2 cup all-purpose flour',
      '1/4 teaspoon salt',
      '1/4 teaspoon baking powder'
    ],
    steps: [
      '1. Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.',
      '2. In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.',
      '3. Bake in preheated oven for 25 to 30 minutes. Do not overcook.',
      '4. To Make Frosting: Combine 3 tablespoons softened butter, 3 tablespoons cocoa, honey, 1 teaspoon vanilla extract, and 1 cup confectioners sugar. Stir until smooth. Frost brownies while they are still warm.'
    ],
    comments: []
  },
  {
    title: 'Tomato Soup',
    image: '/images/tomato_soup.jpg',
    servings: 4,
    ingredients: [
      '5 tomatoes',
      '1 cup heavy cream',
      '1 clove garlic, crushed',
      '1 1/2 cups freshly grated Parmesan cheese',
      '1/4 cup chopped fresh parsley'
    ],
    steps: [
      '1. Melt butter in a medium saucepan over medium low heat. Add cream and simmer for 5 minutes, then add garlic and cheese and whisk quickly, heating through. Stir in parsley and serve.'
    ],
    comments: []
  },
  {
    title: 'Pork Tenderloin Diablo',
    image: '/images/pork.jpg',
    servings: 24,
    ingredients: [
      '8 Pound pork tenderloin',
      '1/2 cup unsalted butter',
      'salt and freshly ground black pepper to taste',
      '1 1/2 quarts turkey stock',
      '8 cups preped stuffing'
    ],
    steps: [
      '1. Preheat oven to 325 degrees F (165 degrees C). Place rack in the lowest position of the oven.',
      '2. Remove the turkey neck and giblets, rinse the turkey, and pat dry with paper towels. Place the turkey, breast side up, on a rack in the roasting pan. Loosely fill the body cavity with stuffing. Rub the skin with the softened butter, and season with salt and pepper. Position an aluminum foil tent over the turkey.',
      '3. Place turkey in the oven, and pour 2 cups turkey stock into the bottom of the roasting pan. Baste all over every 30 minutes with the juices on the bottom of the pan. Whenever the drippings evaporate, add stock to moisten them, about 1 to 2 cups at a time. Remove aluminum foil after 2 1/2 hours. Roast until a meat thermometer inserted in the meaty part of the thigh reads 165 degrees F (75 degrees C), about 4 hours.',
      '4. Transfer the turkey to a large serving platter, and let it stand for at least 20 to 30 minutes before carving.'
    ],
    comments: []
  },
  {
    title: 'Salad',
    image: '/images/salad.jpg',
    servings: 8,
    ingredients: [
      '3 eggs',
      '1/2 cup butter',
      '1 1/2 cups white sugar',
      '1 cup buttermilk',
      '1 teaspoon vanilla extract',
      '1 tablespoon lemon juice',
      '1/8 teaspoon freshly grated nutmeg',
      '1 (9 inch) unbaked pie crust'
    ],
    steps: [
      '1. Preheat oven to 350 degrees (175 degrees C).',
      '2. Beat eggs until frothy; add butter, sugar and flour. Beat until smooth.',
      '3. Stir in buttermilk, vanilla, lemon juice and nutmeg; pour into pie shell.',
      '4. Bake for 40 to 60 minutes, or until center is firm.'
    ],
    comments: []
  },
  {
    title: 'Beef Ribs',
    image: '/images/rib.jpg',
    servings: 4,
    ingredients: [
      '4 cups penne pasta',
      '5 teasppns olive oil',
      '4 cloves garlic',
      '1 medium onion diced',
      '1 (16 ounce) can diced tomatoes with green chilies, drained',
      '1/2 lemon, juiced',
      '1 pound uncooked medium shrimp, peeled and deveined',
      '1/4 cup chopped fresh parsley',
      'salt, to taste',
      'ground black pepper, to taste',
      '1 pinch crushed red pepper flakes, or to taste',
      '1 teaspoon grated Parmesan cheese, or to taste'
    ],
    steps: [
      '1. Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Once the water is boiling, stir in the penne, and return to a boil. Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 11 minutes. Drain well in a colander set in the sink.',
      '2. Heat the olive oil in a skillet over medium heat. Stir in the garlic and onion; cook and stir until the onion has softened and turned translucent, about 5 minutes. Stir in the tomatoes; simmer until heated through, about 5 minutes more. Add the lemon juice and shrimp. Cook and stir until the shrimp are bright pink on the outside and the meat is no longer transparent in the center, about 5 minutes. Stir in the parsley, then season with salt, pepper, and red pepper flakes. Serve shrimp and sauce over prepared penne pasta. Sprinkle with Parmesan cheese.',
    ],
    comments: []
  },
  {
    title: 'Pie Pie Pie',
    image: '/images/pie.jpg',
    servings: 16,
    ingredients: [
      '1/2 cup butter',
      '1 cup white sugar',
      '2 eggs',
      '1 teaspoon vanilla extract',
      '1/3 cup unsweetened cocoa powder',
      '1/2 cup all-purpose flour',
      '1/4 teaspoon salt',
      '1/4 teaspoon baking powder'
    ],
    steps: [
      '1. Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.',
      '2. In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.',
      '3. Bake in preheated oven for 25 to 30 minutes. Do not overcook.',
      '4. To Make Frosting: Combine 3 tablespoons softened butter, 3 tablespoons cocoa, honey, 1 teaspoon vanilla extract, and 1 cup confectioners sugar. Stir until smooth. Frost brownies while they are still warm.'
    ],
    comments: []
  },
  {
    title: 'Healthy Juice',
    image: '/images/juice.jpg',
    servings: 4,
    ingredients: [
      '1/4 cup butter',
      '1 cup heavy cream',
      '1 clove garlic, crushed',
      '1 1/2 cups freshly grated Parmesan cheese',
      '1/4 cup chopped fresh parsley'
    ],
    steps: [
      '1. Melt butter in a medium saucepan over medium low heat. Add cream and simmer for 5 minutes, then add garlic and cheese and whisk quickly, heating through. Stir in parsley and serve.'
    ],
    comments: []
  }
];

module.exports = popularRecipes;
