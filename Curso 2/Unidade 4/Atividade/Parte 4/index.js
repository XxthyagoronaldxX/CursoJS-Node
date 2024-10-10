function initCandidatos(candidatos) {
    sortCandidatos(candidatos);

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

function votarCandidato(eleicao) {
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
    

    initCandidatos(eleicao.candidatos);
}

(async () => {
    const eleicao = await findCurrentEleicao();

    document.getElementsByClassName("btn-votar-urna")[0].addEventListener("click", () => votarCandidato(eleicao));

    initCandidatos(eleicao.candidatos);
})();
