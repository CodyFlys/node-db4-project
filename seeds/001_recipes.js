exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'Betty Crockers Soup' }
  ])
};