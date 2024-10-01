const jsonString = '{"nome": "Thyago", "idade": 10}';

console.log(JSON.parse(jsonString)); // Transforma um JSON String em um Object.

const object = {nome: "Test", idade: 20};

console.log(JSON.stringify(object)); // Transforma um Object em um JSON String.