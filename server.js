const http = require("http");
const { readFile } = require("fs").promises;
const resolveEndpoint = require("./controllers/endpointController");

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

handleServer(resolveEndpoint);
