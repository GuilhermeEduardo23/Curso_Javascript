//tipos primitivos

//boolean
var vOUf = false;
console.log(vOUf);
console.log(typeof(vOUf)); //typeof serve para mostrar o tipo de dado que a variável é.

//number
var numero = 1;
console.log(numero);
console.log(typeof(numero));

//string ou caractere
var nome = "Guilherme Eduardo";
console.log(nome);
console.log(typeof(nome));

//variável sem valor ou nula
var variavel;
console.log(variavel);
console.log(typeof(variavel));

//var: variável de escopo global e let é variável de escopo local

let sobrenome = "Rodrigues da Silva";
console.log(sobrenome);
console.log(typeof(sobrenome));

//concatenação de strings
console.log(nome + " " + sobrenome);

//const ou constraint são variáveis com valores fixos, que não mudam
const constante = "23 anos";
console.log(constante);
console.log(typeof(constante));

var escopoGlobal = "global";
console.log(escopoGlobal);

//função com variável local
function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição
var atribuicao = "Javascript";

//atribuição
var comparacao = 10 == 10;
console.log(comparacao);
console.log(typeof(comparacao));

var comparacaoIdentica = 10 === 10;
console.log(comparacaoIdentica);

//operadores aritméticos

//adição
var adicao = 2 + 2;
console.log(adicao);
console.log(typeof(adicao));

//subtração
var subtracao = 4 - 2;
console.log(subtracao);
console.log(typeof(subtracao));

//multiplicação
var multiplicacao = 3 * 2;
console.log(multiplicacao);
console.log(typeof(multiplicacao));

//divisão real
var divisaoReal = 8 / 2;
console.log(divisaoReal);
console.log(typeof(divisaoReal));

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);
console.log(typeof(divisaoInteira));

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);
console.log(typeof(potenciacao));

//operadores relacionais

// maior que
var maiorQue = 6 > 3;
console.log(maiorQue);
console.log(typeof(maiorQue));

//menor que
var menorQue = 2 < 4;
console.log(menorQue);
console.log(typeof(menorQue));

//maior ou igual a
var maiorOuIgualA = 5 >= 4;
console.log(maiorOuIgualA);
console.log(typeof(maiorOuIgualA));

//menor ou igual a
var menorOuIgualA = 4 <= 5;
console.log(menorOuIgualA);
console.log(typeof(menorOuIgualA));

//operadores lógicos

//&& - "e" todos os valores terão que serem verdadeiros
var e = true && false;
console.log(e);
console.log(typeof(e));

//|| - "ou" algum dos valores terá que ser verdadeiro
var ou = true || false;
console.log(ou);
console.log(typeof(ou));

//! - "não" inverte o valor de verdadeiro para falso e vice-versa
var nao = !true;
console.log(nao);
console.log(typeof(nao));