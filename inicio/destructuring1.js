const pessoa = {
    nome: "Kelvin Alves",
    idade: 20,
    endereco: {
        logradouro: "Qr 120 conjunto 16",
        numero: 3
    }
}

// colocando nome e idade do objeto pessoa dentro de variáveis com mesmo nome
const{nome, idade} = pessoa
console.log(nome, idade)

// colocando dentro de variáveis com outros nomes
const{nome: n, idade: i} = pessoa
console.log(n, i)

// colocando atributps do objeto endereco dentro de variáveis com mesmo nome
const{endereco:{logradouro, numero}} = pessoa
console.log(logradouro, numero)