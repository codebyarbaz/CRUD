const express = require('express');
const dbOperations = require('../db/dbOperations');
var indexRouter = express.Router();

// Create

indexRouter.post('/create', (req, res, next) => {
    var stuObject = req.body;
    console.log("Request body is ", req.body);
    console.log("stuObject is received on indexRouter/post ", stuObject);
    dbOperations.createStudent(stuObject, res);
    console.log("stuObject is sent to dbOperations");
});

// Read

indexRouter.get('/readall', (req, res, next) => {
    dbOperations.readAllStudents(res);
});


// Update

indexRouter.post('/update', (req, res, next) => {
    var stuObject = req.body;
    dbOperations.updateStudentbyID(stuObject, res);
});


// Delete

indexRouter.post('/delete', (req, res, next) => {
    var delKey = req.body.key;
    dbOperations.deleteStudent(delKey, res);
});

indexRouter.get('/deleteall', (req, res, next) => {
    dbOperations.deleteAllStudents(res);
});

module.exports = indexRouter;