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

function initCandidatos() {
    sortCandidatos();

    const candidatosContainer = document.getElementsByClassName("candidatos")[0];

    candidatosContainer.innerHTML = "";
    for (const candidato of candidatos) 
        candidatosContainer.innerHTML += genCandidatoElement(candidato);
}

function sortCandidatos() {
    candidatos.sort((a, b) => b.votos - a.votos);
}

function genCandidatoElement(candidato) {
    return `
    <li>
        <span class="nome-candidato">${candidato.num + " :: " + candidato.nome}</span>
        <span class="votos-candidato">${candidato.votos} votos</span>
    </li>
    `;
}

function votarCandidato() {
    const candidatoNum = document.getElementById("numero-candidato").value;



    console.log(candidatoNum);

}

initCandidatos();