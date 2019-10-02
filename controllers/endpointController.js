let readEmployeeList = require("../models/employeeModel");

function resolveEndpoint(path, request, response) {
  response.writeHead(200, { "Content-type": "application/json" });

  const pathArray = path.substring(1).split("/");

  if (pathArray[0] === "northcoders") {
    if (pathArray.length == 1) {
      readEmployeeList(request, response).then(employeeListJSON => {
        response.write(employeeListJSON);
        response.end();
      });
    }
  } else {
    response.end(`${path} <--- current path.`);
  }
}

module.exports = resolveEndpoint;
