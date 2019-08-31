//Globals
const express = require('expres');
const server = express();
const helmet = require('helmet');
const taskRouter = require('./tasks/project-router.js/index.js');

server.use(helmet());
server.use(express.json());
server.use('/api/projects', taskRouter);

//🌄 Default endpoint  
server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the task api!'
    });
});

server.exports = server;