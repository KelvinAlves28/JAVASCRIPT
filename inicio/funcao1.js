//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //vai somar o valor com um undefined resultando em um NaN
imprimirSoma(2, 3, 4, 5, 6) //vai somar os dois primeiros parametros e ignorar os outros
imprimirSoma() //vai resultar em um NaN pois não tem numero para somar

function soma(a, b = 3){
    return a + b
}
console.log(soma(3, 7))
console.log(soma(12))