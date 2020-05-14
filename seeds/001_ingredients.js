exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'flour' },
    { ingredient_name: 'Carrots' },
    { ingredient_name: 'salt'  },
    { ingredient_name: 'Pepper' },
    { ingredient_name: 'egg' },
    { ingredient_name: 'water' },
    { ingredient_name: 'corn syrup' },
    { ingredient_name: 'ginger' },
    { ingredient_name: 'garlic' }
  ])
};