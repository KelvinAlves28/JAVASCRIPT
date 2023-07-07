let preco = 19.90
let desconto = 0.4

console.log("Preco final: ", preco * (1 - desconto))

let precoFinal = preco * (1 - desconto)
let precoFinal1 = preco - (preco * desconto)

console.log("Preco final: ", precoFinal)
console.log("Preco final: ", precoFinal1.toFixed(2))

let nome = "Caderno"
let categoria = "Papelaria"
console.log("Produto: "+ nome + "\nCategoria: " + categoria + "\nPreço: " + precoFinal)
