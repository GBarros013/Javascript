//var e let
var firstName = 'João';
var lastName = 'Souza';

if (firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';
}

console.log(firstName, lastName);

//constantes

const FIRST_NAME = 'Barros';

console.log(FIRST_NAME);

//Strings

let nome = 'Gabriel';
console.log(nome);
let sobrenome = 'Barros';
console.log(sobrenome);
console.log(typeof nome);
nome.concat(sobrenome);
let concatenado = nome.concat(sobrenome);
console.log(concatenado);
console.log(concatenado.length);
concatenado = `${nome}     ${sobrenome}`
console.log(concatenado);
let frase = 'Olá, tudo bem:';
console.log(frase.split(""));
console.log(frase.split(" "));
console.log(frase.includes("tudo"));
console.log(frase.startsWith("O"));
console.log(frase.endsWith("?"));
console.log(frase.replace(",","!"));


