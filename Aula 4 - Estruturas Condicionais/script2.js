var array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
var object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};
var contador = 0;

//estrutura for ou para - executa uma instrução até que ela se torne falsa

for(contador; contador < array.length; contador + 1){
    console.log(contador);
}

//for/in executa a repetição a partir de uma propriedade
//com array
for(var i in array){
    console.log(i);
}

//com object
for(i in object){
    console.log(i);
}

//for/of executa a repetição a partir de valor
//com array
for(i of array){
    console.log(i);
}

//while executa enquanto a condição for verdadeira
var a = 0;

while(a < 10){
    a+1;
    console.log(a);
}

do{
    a+1;
    console.log(a);
} while(a < 10)