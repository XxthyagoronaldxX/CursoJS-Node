const nowDate = new Date();

const nowDateFormatted = new Intl.DateTimeFormat("pt-BR").format(nowDate);

console.log(nowDateFormatted);

const nowDateFormatted2 = new Intl.DateTimeFormat("pt-BR", {
    second: "2-digit",
}).format(nowDate);

console.log(nowDateFormatted2);