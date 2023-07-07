let numero = 1
{
    let numero = 2
    console.log("dentro:", numero)
}
console.log("fora:", numero)

console.log("----------------")

let numero1 = 1
{
    let numero2 = 2
    console.log("dentro:", numero2)
    console.log("fora:", numero1) //Vai funcionar pois a variavel numero1 está em um escopo mais aberto
}
//console.log(numero2) //Não vai funcionar pq a variavel numero2 está dentro do escopo