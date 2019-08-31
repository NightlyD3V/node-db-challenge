//Globals
const express = require('expres');
const server = express();
const helmet = require('helmet');
const taskRouter = require('./tasks/task-router.js');

server.use(helmet());
server.use(express.json());
server.use('/api/tasks', taskRouter);

//🌄 Default endpoint  
server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the task api!'
    });
});

server.exports = server;