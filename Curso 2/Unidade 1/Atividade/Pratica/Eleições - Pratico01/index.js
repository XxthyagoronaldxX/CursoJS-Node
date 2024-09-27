let candidatos = [
    {
        id: 1,
        nome: "Thyago",
        votos: 10
    },
    {
        id: 2,
        nome: "Natãn",
        votos: 20
    }
]

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
        <span class="nome-candidato">${candidato.nome}</span>
        <span class="votos-candidato">${candidato.votos} votos</span>
        <button class="btn-votar" onclick="votaCandidato(${candidato.id})">Votar</button>
    </li>
    `;
}

function votaCandidato(candidatoId) {
    candidatos.find(candidato => candidato.id === candidatoId).votos++;

    initCandidatos();
}

initCandidatos();