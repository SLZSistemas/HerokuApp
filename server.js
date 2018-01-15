const express = require("express");

var app = express();
var port = process.env.port || 8080;

app.use(express.static(__dirname));

app.get("/", (resposta, requisicao) => {
    resposta.render("index");
});

app.listen(port, () => {
    console.log("Servidor SLZSistemas rodando...");
})
