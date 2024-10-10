let eleicao = {
    branco: 0,
    nulo: 0,
    candidatos: [
        {
            id: 1,
            num: 2002,
            nome: "Thyago",
            votos: 10
        },
        {
            id: 2,
            num: 4530,
            nome: "Natãn",
            votos: 20
        },
        {
            id: 2,
            num: 6530,
            nome: "Calado",
            votos: 30
        }
    ]
}

async function findCurrentEleicao() {
    return await new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(eleicao);
            }, 2000);
        } catch(err) {
            reject(err)
        };
    });
}