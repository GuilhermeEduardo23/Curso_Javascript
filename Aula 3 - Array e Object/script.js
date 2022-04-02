//o que são vetores ou arrays

//como declarar um array
//os dados de um array são colocados dentro de colchetes.
var array = ["string", 1, true];
console.log(array);
console.log(typeof(array));

//o array pode guardar diversos tipos de dados, inclusive guardar outros arrays dentro do principal.
var array2 = ["string", 2, false, ["array1", 1, 2], ["array2", "Guilherme Eduardo"], ["array3"], ["array4"]];
console.log(array2[3]);
console.log(typeof(array2));

//forEach recebe uma função como parâmetro
array2.forEach(function(item, index){console.log(item, index)});

//push adiciona um novo item no final do array
array.push("Novo item");
console.log(array);

//pop remove um item no final do array
array.pop();
console.log(array);

//shift remove um item no início do array
array.shift();
console.log(array);

//unshift adiciona um novo item no início do array
array.unshift("Novo Item no Inicio");
console.log(array);

//indexOf retorna a posição ou indíce de um item no array
console.log(array.indexOf(true));

//splice remove os itens de acordo com a quantidade de índices informado
array2.splice(0, 3);
console.log(array2);

//slice retorna uma parte de um array já existente
var novoArray = array.slice(0, 3);
console.log(novoArray);

//objeto object possuem propriedades e valores
var object = {string: "string", number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto interno"}};
console.log(object.objectInterno);

//desestruturação de objetos
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);