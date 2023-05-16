const mongoose = require('mongoose');

// to create a new model for db
const empSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    gender:String,
    salary: Number,
},{timestamps:true})

//craete collection
const Employee = new mongoose.model('employee', empSchema);

module.exports = Employee;
