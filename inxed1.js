//Aqui foi usada a função primeiro
function substracao(v, d){
    let conta = v - d
    return conta
}
//Aqui estão as variáveis
let conta = substracao(700,63)
let rank

if (conta < 10){
    rank = "ferro"
 }else if (conta >= 11 && conta <= 20){
    rank = "bronze"
 }else if (conta >= 21 && conta <= 50){
    rank = "prata"
 }else if (conta >= 51 && conta <= 80){
    rank = "ouro"
 }else if (conta >= 81 && conta <= 90){
    rank = "diamante"
 }else if (conta >= 91 && conta <= 100){
    rank = "lendário"
 }else if (conta >= 101){
    rank = "imortal"
}
console.log(`Seu herói tem um saldo de ${conta} de vitórias e seu nível é ${rank}`)

