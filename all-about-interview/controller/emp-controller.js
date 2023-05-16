const Employee = require("../models/emp-model");

//get all employees
const index = (req, res) => {
  Employee.find()
    .then((result) => {
      res.json({
        result,
      });
    })
    .catch((error) => {
      res.json({
        msg: `An error occured!`,
      });
    });
};

//show single employee
const show = (req, res) => {
  let empId = req.body.empId;
  Employee.findById(empId)
    .then((result) => {
      res.json({
        result,
      });
    })
    .catch((error) => {
      res.json({
        msg: `An error occured!`,
      });
    });
};

//creation of new employee
const store = (req, res) => {
  let emp = new Employee({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    salary: req.body.salary,
  });
  emp
    .save()
    .then((result) => {
        res.json({ 
          msg: `data created successfully`,
          newdata: result });
      })
    .catch((error) => {
      res.json({
        msg: `An error occured!`,
      });
    });
};

const update = (req, res) => {
  let empId = req.body.empId;

  let updatedData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    salary: req.body.salary,
  };

  Employee.findByIdAndUpdate(empId, { $set: updatedData })
    .then((result) => {
      res.json({ 
        msg: `data updated successfully`,
        newdata: result });
    })
    .catch((error) => {
      res.json({
        msg: `An error occured!`,
        error: error
      });
    });
};

const remove = (req, res) => {
  let empId = req.body.empId;
  Employee.findByIdAndRemove(empId)
  .then((result) => {
    res.json({ 
      msg: `data deleted successfully`,
      deletedData: result });
  })
  .catch((error) => {
    res.json({
      msg: `An error occured!`,
    });
  });
};


module.exports ={
    index,
    show,
    store,
    update, 
    remove
}