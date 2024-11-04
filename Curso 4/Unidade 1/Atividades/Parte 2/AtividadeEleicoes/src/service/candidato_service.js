let AUTO_INCREMENT = 3;
let candidatos = [
    {
        id: 1,
        name: "Thyago",
        number: 0,
        partido: "ABC",
        foto: "thyago.png",
        votos: 0
    },
    {
        id: 2,
        name: "Daniel",
        number: 1,
        partido: "CCB",
        foto: "daniel.png",
        votos: 0
    },
    {
        id: 3,
        name: "Ronaldo",
        number: 2,
        partido: "GAD",
        foto: "ronaldo.png",
        votos: 0
    }
]

function findAllCandidato() {
    return candidatos;
}

function findCandidatoById(id) {
    return candidatos.find(candidato => candidato.id === id);
}

function findCandidatoByNumber(number) {
    return candidatos.find(candidato => candidato.number === number);
}

function updateCandidato(id, candidato) {
    let candidatoAux = candidatos.find(candidato => candidato.id === id);

    candidatoAux.name = candidato.name;
    candidatoAux.number = candidato.number;
    candidatoAux.partido = candidato.partido;
    candidatoAux.foto = candidato.foto;

    return candidatoAux;
}

function saveCandidato(candidato) {
    candidato.id = ++AUTO_INCREMENT;
    
    candidatos.push(candidato);

    return candidato;
}

function deleteCandidatoById(id) {
    candidatos = candidatos.filter(candidato => candidato.id !== id);
}

function votarCandidatoByNumber(number) {
    candidatos.find(candidato => candidato.number === number).votos++;
}

const CandidatoService = { 
    findAllCandidato, 
    findCandidatoById, 
    findCandidatoByNumber, 
    saveCandidato, 
    updateCandidato, 
    deleteCandidatoById, 
    votarCandidatoByNumber
};

export default CandidatoService;