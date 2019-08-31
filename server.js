//Globals
const express = require('express');
const server = express();
const helmet = require('helmet');
const projectRouter = require('./projects/project-router.js');

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectRouter);

//🌄 Default endpoint  
server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the task api!'
    });
});

module.exports = server;