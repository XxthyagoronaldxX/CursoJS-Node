const stringExemplo = "Test";

console.log(stringExemplo.length);
console.log(stringExemplo.indexOf("Test"));
console.log(stringExemplo.lastIndexOf("Test"));
console.log(stringExemplo.concat(" Concat Test"));
console.log(stringExemplo.slice(0, 4));

console.log(stringExemplo.charAt(0));
console.log(stringExemplo.charCodeAt(0));

console.log(stringExemplo.toUpperCase());
console.log(stringExemplo.toLowerCase());

console.log(stringExemplo.startsWith("Test"));
console.log(stringExemplo.endsWith("Test"));
console.log(stringExemplo.includes("Test"));

console.log(stringExemplo.substring(2));
console.log(stringExemplo.replace("Test", "Thyago"));
console.log(stringExemplo.split("e"));
console.log(" Test ".trim());

console.log(stringExemplo.padStart(".", 25));
console.log(stringExemplo.padEnd(".", 25));
console.log(stringExemplo.repeat(2));