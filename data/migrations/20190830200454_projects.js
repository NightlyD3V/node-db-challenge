
exports.up = function(knex) {
    //🎨 TASKS TABLE  
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name')
            .unique()
            .notNullable();
        tbl.inte3ger('project_id')
            .unique()
            .notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name')
            .unique()
            .notNullable();
        //🔑 Foreign Key
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('task_name', 128)
            .notNullable();
        tbl.integer('task_id')
            .unique()
            .notNullable();
        //🔑 Foreign Key
        tbl.integer('task_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
