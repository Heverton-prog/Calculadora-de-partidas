//Aqui são as estatisticas de vitórias e derrotas
let saldoVitorias = calculoRank(100,38) 

//Definição dos nível do herói através da substração de vit. e der.
let nivel

 if (saldoVitorias < 10){
    nivel = "ferro"
 }else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "bronze"
 }else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "prata"
 }else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "ouro"
 }else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "diamante"
 }else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "lendário"
 }else if (saldoVitorias >= 101){
    nivel = "imortal"
 }
console.log("O Herói tem um saldo de " + saldoVitorias + " está no nível " + nivel)

//função usada para o cálculo
function calculoRank(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}