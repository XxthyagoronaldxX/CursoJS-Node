let initialState = {
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

const eleicaoSubject = useSubject(initialState);

eleicaoSubject.addObserver(initCandidatos);

function initCandidatos(eleicao) {
    sortCandidatos(eleicao.candidatos);

    const candidatosContainer = document.getElementsByClassName("candidatos")[0];

    candidatosContainer.innerHTML = "";
    for (const candidato of eleicao.candidatos) 
        candidatosContainer.innerHTML += genCandidatoElement(candidato);

    document.getElementById("votos-brancos").innerHTML = eleicao.branco;
    document.getElementById("votos-nulos").innerHTML = eleicao.nulo;
}

function sortCandidatos(candidatos) {
    candidatos.sort((a, b) => b.votos - a.votos);
}

function genCandidatoElement(candidato) {
    return /*html*/`
    <li>
        <span class="nome-candidato">${candidato.num + " :: " + candidato.nome}</span>
        <span class="votos-candidato">${candidato.votos} votos</span>
    </li>
    `;
}

function votarCandidato() {
    const eleicao = eleicaoSubject.getState();
    const numCandidatoElement = document.getElementById("numero-candidato");
    const candidatoNumStr = numCandidatoElement.value;

    if (candidatoNumStr === "") {
        eleicao.nulo++;
    } else {
        const candidatoNum = parseInt(candidatoNumStr);

        if (candidatoNum === 0) {
            eleicao.branco++;
        } else {
            const candidato = eleicao.candidatos.find((candidato) => candidato.num === candidatoNum);

            if (candidato === undefined) {
                numCandidatoElement.setCustomValidity("Candidato não encontrado!");
                numCandidatoElement.reportValidity();
            } else {
                candidato.votos++;
            }
        }
    }

    eleicaoSubject.setState(eleicao);
}

eleicaoSubject.notifyObservers();