const express = require("express");
const app = express();

const date = new Date();
const hora = date.getHours();
const min = date.getMinutes();

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/homeCiclo.html");
});

app.get("/sobreNos", (req, res) => {
    res.sendFile(__dirname+"/sobrenos.html");
});

app.get("/estacoes", (req, res) => {
    res.sendFile(__dirname+"/views/Estacoes.html");
});

app.get("/faleconosco", (req, res) => {
        res.sendFile(__dirname+"/fale.html");
});

app.get("/vagas", (req, res) => {
    res.sendFile(__dirname+"trabalhe.html");
});

app.get("/admin", (req, res) => {
    res.sendFile(__dirname+"/views/admin.html");
});

app.listen(3000, (req, res) => {
    console.log("Servidor rodado as "+(hora<10? "0"+hora : hora)+":"+ (min<10? "0"+min : min)+" na porta 3000");
});