/* Estruturas Condicionais
Estruturas de Decisão*/

var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário
jogador1 >= 0 && jogador2 >= 0 ? console.log("Os jogadores são válidos!") : console.log("Os jogadores são inválidos!");

//aninhamento de if: um if dentro de outro if
if(jogador1 != -1){
    if(jogador1 > 0 && jogador2 == 0){
        console.log("Jogador 1 marcou ponto!");
        placar = jogador1 > jogador2;
    } else if(jogador2 > 0 && jogador1 == 0){
        console.log("Jogador 2 marcou ponto!");
        placar = jogador2 > jogador1;
    } else{
        console.log("Ninguém marcou ponto!");
    }
}

switch(placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou a partida!");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou a partida!");
        break;
    default:
        console.log("Ninguém ganhou a partida!");
        break;
}