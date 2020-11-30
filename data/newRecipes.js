const newRecipes = [
    {
      id: 1,
      title: 'A Simple Perfect Roast Turkey',
      image: '/images/turkey.jpg',
      servings: 24,
      ingredients: [
        '1(18 Pound) whole turkey',
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
      comments: ['Very Tasty', 'Yes, agreed!']
    },
    {
      id: 2,
      title: 'Buttermilk Pie',
      image: '/images/buttermilk_pie.jpg',
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
      comments: ['I will try this tonight!']
    },
    {
      id: 3,
      title: 'Spicy Shrimp and Totato Scampi',
      image: '/images/shrimp_pasta.jpg',
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
      comments: ['The best recipe ever.', 'I love it!']
    },
    {
      id: 4,
      title: 'Best Brownies',
      image: '/images/chocolate.jpg',
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
      id: 5,
      title: 'Alfredo Sauce',
      image: '/images/pasta.jpg',
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
    },
    {
      id: 6,
      title: 'Vanilla Cake',
      image: '/images/cake.jpg',
      servings: 24,
      ingredients: [
        '4 cups confectioners',
        '1/2 cup butter, softened',
        '7 tablespoons pure maple syrup',
        '3 tablespoons heavy whipping cream'
      ],
      steps: [
        '1. Beat confectioners sugar, butter, and syrup together in a bowl using an electric mixer until smooth. Add cream, 1 tablespoon at a time, to sugar mixture and beat until frosting is thickened and desired consistency.'
      ],
      comments: []
    },
    {
      id: 7,
      title: 'Chicken Salad',
      image: '/images/chickenSalad.jpg',
      servings: 8,
      ingredients: [
        '6 boneless chicken breast halves, cooked and diced',
        '1 cup chopped celery',
        '1 teaspoon salt-free herb and spice blend',
        '1 cup mayonnaise'
      ],
      steps: [
        '1. Combine the chicken, celery, spice blend and mayonnaise. Mix all together; more or less mayonnaise can be added, depending on your preference. Voila, your summer salad is ready to serve!'
      ],
      comments: []
    },
    {
      id: 8,
      title: 'Cup Cake',
      image: '/images/cupcake.jpg',
      servings: 4,
      ingredients: [
        '3/4 cup graham cracker crumbs',
        '1/4 cup chopped pecans',
        '3/4 cup fresh raspberries, crushed',
        '8 ounce package cream cheese',
        '1 (16 ounce) can diced tomatoes with green chilies, drained',
        '10 fluid ounces sweetened condensed milk'
      ],
      steps: [
        '1. Line a 12 cup muffin pan with paper cup liners. In a medium bowl, combine graham cracker crumbs, crushed pecans and melted margarine, mixing well to blend. Spoon mixture evenly into a 12 cup muffin pan lined with paper cup liners. Press mixture with a spoon to firm bottom. Puree raspberries and set aside.',
        '2. Beat cream cheese until fluffy. Add condensed milk and 1/2 cup of the raspberry puree and mix until well blended. Fold in whipped topping.',
        '3. Spoon evenly into baking cups. Freeze for at least 5 hours. When ready to serve, remove paper liners. Invert cakes onto individual serving plates. Drizzle remaining raspberry puree over cakes. Garnish with a few whole raspberries. Serve frozen.'
      ],
      comments: ['I will add more cream cheese next time.']
    },
    {
      id: 9,
      title: 'Grandma\'s Doughnuts',
      image: '/images/doughnut.jpg',
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
      id: 10,
      title: 'Jeannie\'s Kichin\' Fish',
      image: '/images/fish.jpg',
      servings: 4,
      ingredients: [
        '1 pound tilapia fillets, rinsed and patted dry',
        '1 cup heavy cream',
        '1 clove garlic, crushed',
        '1 1/2 cups freshly grated Parmesan cheese',
        '1/4 cup chopped fresh parsley'
      ],
      steps: [
        '1. Beat the egg with milk in a shallow bowl. In another shallow bowl, mix together the bread crumbs, roasted onion flakes, garlic, blackened seasoning, crushed red pepper flakes, black pepper, and sea salt.',
        '2. Dip a tilapia fillet into the egg mixture, then press gently into the crumb mixture on both sides; set the coated fillet onto a plate. Repeat with remaining fillets; refrigerate the coated fillets for about 15 minutes to help set the crumbs.',
        '3. Heat the olive oil and butter in a cast-iron frying pan over medium heat. Lay the fillets into the skillet, and pan-fry until golden brown on each side, about 3 minutes per side. The fish should be opaque and flaky underneath the coating. Remove and drain fillets on paper towels.'
      ],
      comments: []
    }
  ];

module.exports = newRecipes;
