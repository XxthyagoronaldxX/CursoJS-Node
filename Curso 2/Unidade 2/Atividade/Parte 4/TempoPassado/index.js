const date = new Date();

function calcularTempoPassado(data) {
    const dateNow = new Date();

    if (data > dateNow) {
        erroDataFutura();
    } else {
        const dateDiff = dateNow.getTime() - data.getTime();
        const hoursInMS = 1000 * 60 * 60;
        const minutesInMS = 1000 * 60;
        const daysInMS = 1000 * 60 * 60 * 24;
        const hours = Math.trunc(dateDiff / hoursInMS);
        const minutes = (dateDiff / minutesInMS) % 60;

        return `Dias: ${daysInMS} ${hours}:${minutes}`;
    }
}

function erroDataFutura() {
    throw new Error("Erro :: Data informada está no futuro.");
}