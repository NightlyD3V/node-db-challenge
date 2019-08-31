const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

/* GET: /api/projects/ */
router.get('/', (req, res) => {
    Projects.getProjects()
    .then((projects) => {
        res.status(200).json(projects);
    })
    .catch((err) => {
        console.log((err) => {
        res.status(500).json({
            message: 'Error getting all projects!'
        });
    });
});

/* POST: /api/projects */
router.post('/', (req, res) => {
    const params = req.body;

    Projects.addProject(params)
    .then((added) => {
        res.status(200).json({
            message: `Project added!: ${added}`
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error adding new project'
        });
    });
});

/* GET: /api/project/resources */
router.get('/resources', (req, res) => {
    Projects.getResources() 
    .then((resources) => {
        res.status(200).json(resources);
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).json({
            message: 'Error getting all resources!'
        });
    });
});

/* GET: /api/project/tasks */
router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then((tasks) => {
        res.status(200).json(tasks)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error getting all tasks!'
        });
    });
});

/* POST: /api/project/tasks */
router.post('/tasks', (req, res) => {
    const params = req.body;
    
    Projects.addTasks(params)
    .then((task) => {
        res.status(200).json({
            message: `Task added: ${task}`
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error adding new task!'
        })
    })
})