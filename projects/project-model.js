const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResources,
    addTasks,
    getTasks

};

function getProjects() {
    return db('projects');
};

function addProject(params) {
    return db('projects').insert(params);
};

function getResources() {
    return db('resources');
}

function addResources(params) {
    return db('resources').insert(params);
}

function addTasks(params) {
    return db('tasks').insert(params);
};

function getTasks() {
    return db('tasks');
};
