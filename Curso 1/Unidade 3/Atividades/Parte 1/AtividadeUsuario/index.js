window.alert("Iniciando cadastro do usuário!")

let nome = window.prompt("Informe o nome: ");
let idade = parseInt(window.prompt("Informe a idade: "));
let email = window.prompt("Informe o E-mail: ");
let telefone = window.prompt("Informe o telefone: ");

function buildUser(nome, idade, email, telefone) {
    return {
        nome, 
        idade,
        email,
        telefone
    }
}

function printBody(key, value) {
    document.write("<h3>" + key + ": " + value + "</h3>");
}

printBody("Nome", nome);
printBody("Idade", idade);
printBody("Email", email);
printBody("Telefone", telefone);

console.log(buildUser(nome, idade, email, telefone));