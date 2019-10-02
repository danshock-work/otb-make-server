const { readFile } = require("fs").promises;

function readEmployeeList() {
  return readFile("./data/northcoderEmployees.json", "utf8");
}

module.exports = readEmployeeList;
