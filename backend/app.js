const express = require("express"); //npm install express
const cors = require("cors"); //npm install cors
const { tasks } = require("./task.js"); //import tasks from task.js
const server = express(); //assigned app name is server

server.use(cors()); // Enable CORS for all routes

server.get("/tasks", (req, res) => {
  //get used to send data
  res.json(tasks);
});

server.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
