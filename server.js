
const config = require("config")
const express = require("express")
const bodyParser = require("body-parser")

console.log("Abrindo super hiper servidor!!!!!");

let port = config.get("server.port");
//console.log("porta: ",porta);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const bandRoute = require("./routers/bandas-rock")
bandRoute(app,config)

app.listen(port, function ()  {
    console.log(`Servidor rodando na porta ${port}`)
});