
exports.up = function(knex) {
    //🎨 TASKS TABLE  
    return knex.schema
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('task_name', 128)
            .notNullable();
        tbl.integer('task_id')
            .unique()
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
