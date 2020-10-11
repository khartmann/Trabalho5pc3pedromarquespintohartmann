var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
console.log("Servidor Iniciado");
let body = "";
req.on("end", function(){
  console.log(body);
  const param = body.split("&");
  const nome = param[0].split("=")[1];
  const matricula = param[1].split("=")[1];
  let dataNasc = new Date(param[2].split("=")[1]);

  dataNasc = dataNasc.getDate() + "-" + (dataNasc.getMonth() + 1) + "-" + dataNasc.getFullYear()

  let idade = new Date(new Date() - new Date(dataNasc));
  let anos = idade.getFullYear()-1970;
  res.end(`<div> Nome: ${nome} <br/> Matricula: ${matricula} <br/> Data de Nascimento: ${dataNasc} <br/> Idade:${anos}</div>`);
});
req.on("data", function(data){
  body += data;
});
}).listen(8080);