exports.seed = function(knex) {
  return knex('steps').insert([
    { recipe_id: 1,  step_num: 1, instructions: "Heat Oven" },
    { recipe_id: 1,  step_num: 2, instructions: "Mix using mixer" },
    { recipe_id: 1,  step_num: 3, instructions: "Stir Stir Stir Fry" },
    { recipe_id: 1,  step_num: 4, instructions: "Do something else" },
    { recipe_id: 1,  step_num: 5, instructions: "Bake it, etc." },
  ])
};