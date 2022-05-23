
const config = require("config")

console.log("meu servidor!!!!!");

let porta = config.get("server.port");
console.log("porta: ",porta);