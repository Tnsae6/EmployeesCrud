const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create employee Schema
const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);
