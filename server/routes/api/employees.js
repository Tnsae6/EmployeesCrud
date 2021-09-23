const express = require('express');
const router = express.Router();
const Employee = require("../../models/Employee")


/**
 * @route   GET api/employees
 * @desc    Get All employees List
 */
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find()   // first find from database
      .sort({ date: -1 })                     // then sort by disending order

    if (!employees) throw Error('No list of employess');
    res.status(200).json(employees);

  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/employees
 * @desc    Create employee
 * @access  Private
 */

router.post('/', async (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    birthday: req.body.birthday,
    gender: req.body.gender,
    salary: req.body.salary
  });

  try {
    const employee = await newEmployee.save();
    if (!employee) throw Error('Error while adding Employee');
    res.status(200).json(employee);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/employee/:id
 * @desc    Delete Employees from the list
 */

router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) throw Error('No Employee is Found From The List');

    const removed = await employee.remove();
    if (!removed)
      throw Error('Error while Deleting Employees');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

/**
 * @route   UPDATE api/employee/:id
 * @desc    Update Employees from the list
 */
router.post('/update/', async (req, res) => {

  try {

    // Using upsert option (creates new doc if no match is found):
    let update = {
      "_id": req.body._id,
      "name": req.body.name,
      "birthday": req.body.birthday,
      "gender": req.body.gender,
      "salary": req.body.salary
    }

    let emp = await Employee.findOneAndUpdate(
      { _id: req.body._id },
      { $set: update },
      { new: true, upsert: true }
    );
    res.status(200).json(emp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

})
module.exports = router;
