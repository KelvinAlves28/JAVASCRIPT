// 1. Gerando valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
//console.log(soma1(0, 0, 0))  //Não funciona pois 0 entra como undefined, então ele usada os valores definidos como padrão

console.log("")

function soma2(a, b, c){
    a = a !== undefined ? a : 1 // Se 'a' for diferente de undefined use 'a' e se for igual a undefined recebe o valor de 1
    b = 1 in arguments ? b : 1 // Se o segundo argumento da função existir pegue o valore de b, se não pegue o valor de 1
    c = isNaN(c) ? 1 : c // Se o valor de c não for um numero, pegue o valor de 1, se for um número pegue o valor de c
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

console.log("")

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))