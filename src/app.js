const express = require('express');
const app = express();

const employees = [
    { id: 1, name: "Carolynn McGinlay" },
    { id: 2, name: "Lodovico Filon" },
    { id: 3, name: "Jefferey Wahlberg" },
    { id: 4, name: "Kayley Tures" },
    { id: 5, name: "Rickard Carver" },
    { id: 6, name: "Michael Stryde" },
    { id: 7, name: "Averell Santino" },
    { id: 8, name: "Constantina Connue" },
    { id: 9, name: "Verile Bondesen" },
    { id: 10, name: "Gwen Grollmann" },
  ];

// GET / sends the string "Hello employees!"
app.get('/', (req, res) => {
  res.send('Hello employees!');
});

// GET /employees sends the array of employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET /employees/random sends a random employee from the array
app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// GET /employees/:id sends the employee with the given id (404 if not found)
app.get('/employees/:id', (req, res) => {
  const employeeId = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === employeeId);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send('Employee not found');
  }
});

module.exports = app;