const http = require("http");
const { readFile } = require("fs").promises;

function handleServer(apiHandler) {
  const server = http.createServer(function(request, response) {
    const { url: path } = request;

    if (path.substring(0, 4) !== "/api") {
      response.writeHead(200, { "Content-type": "application/json" });
      response.end("Hello world");
    } else {
      apiHandler(path.substring(4), request, response);
    }
  });

  server.listen(9090, () => {
    console.log("Server is running at 9090.");
  });
}

handleServer(function(path, request, response) {
  response.writeHead(200, { "Content-type": "application/json" });

  if (path === "/northcoders") {
    readFile("./data/northcoderEmployees.json", "utf8").then(
      employeeListJSON => {
        response.write(employeeListJSON);
        response.end();
      }
    );
  } else {
    response.end(`${path} <--- current path.`);
  }
});
