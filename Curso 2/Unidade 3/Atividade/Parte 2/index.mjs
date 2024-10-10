import { calculaHorasTrabalhadas } from "./calculaHorasTrabalhadas.mjs";

const dateEntrada = new Date();
const dateSaida = new Date();
dateSaida.setHours(dateSaida.getHours() + 4);
dateSaida.setMinutes(dateSaida.getMinutes() + 40);

console.log(calculaHorasTrabalhadas(dateEntrada, dateSaida));