function calculaHorasTrabalhadas(entrada, saida) {
    const dateDiff = saida.getTime() - entrada.getTime();
    const hoursInMS = 1000 * 60 * 60;
    const minutesInMS = 1000 * 60;
    const hours = Math.trunc(dateDiff / hoursInMS);
    const minutes = (dateDiff / minutesInMS) % 60;

    return `${hours}:${minutes}`;
}

module.exports = { calculaHorasTrabalhadas };  // Exportar uma função usando o COMMONJS