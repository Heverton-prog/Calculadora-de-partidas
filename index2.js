//Informações de Vitória e Derrotas do herói
let vitoria = 35
let derrota = 10
let saldoFinal = saldoDeVitorias(vitoria, derrota)
let nivel = rankNivel()

console.log(`O Herói tem de saldo de ${saldoFinal} e está no nível de ${nivel}`)

//Função para Determinar saldo de vitórias
function saldoDeVitorias(numA, numB){
    let resultado = numA - numB
    return resultado
}

//Função para determinar o nivel do herói(Posso chamar em qualquer local o rankS)
function rankNivel(saldoDeVitorias){

    if(saldoFinal <= 10){
        return "Ferro"
    }else if(saldoFinal <= 20){
        return "Bronze"
    }else if(saldoFinal <= 50){
        return "Prata"
    }else if(saldoFinal <= 80){
        return "Ouro"
    }else if(saldoFinal <= 90){
        return "Diamante"
    }else if(saldoFinal <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
 }

