// Factory simples
function criarPessoa1(){
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}
console.log(criarPessoa1())

function criarPessoa(nome, sobrenome){
    return {
        nome: `${nome}`,
        sobrenome: `${sobrenome}`
    }
}

console.log(criarPessoa("Kelvin", "Alves"))
console.log(criarPessoa("Julia", "Alves"))