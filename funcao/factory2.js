function criarProduto(nome, preco){
    return {
        nome,
        preco,
        comDesconto: preco*0.9
    }
}

console.log(criarProduto("notebook", 2259.49))
console.log(criarProduto("tablet", 399.99))