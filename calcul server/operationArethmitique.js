var { createServer } = require("http");
var url = require("url");
var querystring = require("querystring");

var server = createServer((req, res) => {
var params = querystring.parse(url.parse(req.url).query);
var page = url.parse(req.url).pathname;

  res.writeHead(200, { "Content-Type": "text/plain" });

  if ("x" in params && "y" in params && "z" in params) {
    switch (page) {
      case "/addition":
        res.write(
          "Addition: " +
            params.x +
            " + " +
            params.y +
            " + " +
            params.z +
            " = " +
            (Number(params.x) + Number(params.y) + Number(params.z))
        );
        break;

      case "/sub":
        res.write(
          "Soustraction: " +
            params.x +
            " - " +
            params.y +
            " - " +
            params.z +
            " = " +
            (Number(params.x) - Number(params.y) - Number(params.z))
        );
        break;

      case "/multiplication":
        res.write(
          "Multiplication: " +
            params.x +
            " * " +
            params.y +
            " * " +
            params.z +
            " = " +
            Number(params.x) * Number(params.y) * Number(params.z)
        );
        break;

      case "/division":
        res.write(
          "Division: " +
            params.x +
            " / " +
            params.y +
            " / " +
            params.z +
            " = " +
            Number(params.x) / Number(params.y) / Number(params.z)
        );
        break;

      default:
        res.write("Operation non reconnue.");
    }
  } else {
    res.write("Vous devez fournir les paramètres x, y et z.");
  }

  res.end();
});

server.listen(4000, () =>
  console.log("Adresse du serveur : http://localhost:4000")
);
