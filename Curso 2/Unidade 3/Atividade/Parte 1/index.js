const calcHoursWorked = require("./calculaHorasTrabalhadas.js");

const dateEntrada = new Date();
const dateSaida = new Date();
dateSaida.setHours(dateSaida.getHours() + 4);
dateSaida.setMinutes(dateSaida.getMinutes() + 40);

console.log(calcHoursWorked.calculaHorasTrabalhadas(dateEntrada, dateSaida));