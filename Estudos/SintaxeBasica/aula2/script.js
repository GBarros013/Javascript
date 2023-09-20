// tipos primitivos

// boolean
var vouf = false;
console.log(typeof(vouf));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Gabriel';
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao));

//como declarar
var variavel = 'gabriel';
variavel = 'barros'
console.log(variavel);

let variavel2 = 'gabriel';
variavel2 = 'santos';
console.log(variavel2);

const constante = 'gabriel';
console.log(constante);

//escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();  

//atribuição
var atribuição = 'gabriel';

//comparação
var comparação = '0'== 0;
console.log(comparação);

//comparacao identica
var comparacaoIdentica = '0' === 0
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao 
var divisao = 4 / 2;
console.log(divisao);

//resto da divisao
var restoDivisao = 4 % 2;
console.log(restoDivisao);

//potencia
var potencia = 4 ** 2;
console.log(potencia);

// maior que
var maiorQue = 5 < 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 10;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 10 >= 5;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 10 <= 20;
console.log(menorOuIgual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);