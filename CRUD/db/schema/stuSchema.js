const mongoose = require('../common/dbConnection');
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    id: String,
    name: String,
    roll: String,
    branch: String,
    shift: String
});

var students = mongoose.model('students', stuSchema);

module.exports = students;