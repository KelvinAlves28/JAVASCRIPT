var pontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function comparar(lista){
    let maior
    let menor
    let piorRodada
    let record = 0
    for(let i = 0; i < lista.length; i++){
        if (i == 0){
            maior = lista[i]
            menor = lista[i]
            piorRodada = i+1
        } else if(lista[i] > maior){
            maior = lista[i]
            record++
        } else if(lista[i] < menor){
            menor = lista[i]
            piorRodada = i+1
        }
    }
    var resultado = [record, piorRodada]
    return resultado
}

console.log(`Você bateu seu próprio Record ${comparar(pontuacoes)[0]} vezes!`)
console.log(`Sua pior pontuação foi no ${comparar(pontuacoes)[1]}º jogo!`)