const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");


const date = new Date();
const hora = date.getHours();
const min = date.getMinutes();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
/*
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
*/

app.listen(3000, (req, res) => {
    console.log("Servidor rodado as "+(hora<10? "0"+hora : hora)+":"+ (min<10? "0"+min : min)+" na porta 3000");
});
