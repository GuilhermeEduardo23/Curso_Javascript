//tipos de funções

//declarativas
function funcao(){
    console.log("Mensagem apresentada por uma função declarativa.");
}

funcao();

//expressão de função

//com nomeação
var funcao = function funcao(){
    console.log("Mensagem de uma função com nome, declarada por uma variável.");
}

funcao();

//sem nomeação
var funcao2 = function(){
    console.log("Mensagem de uma função sem nome, declarada por uma variável.");
}

funcao2();

//arrow =>
var funcao3 = () =>{
    console.log("Mensagem de uma arrow function =>");
}

funcao3();