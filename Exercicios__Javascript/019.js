function pedido(cod, qtd){
    switch(cod){
        case 100:
            console.log(`Você pediu ${qtd} Cachorro quente!`)
            console.log(`Seu pedido ficou R$${(qtd * 3).toFixed(2)}`)
            break
        case 200:
            console.log(`Você pediu ${qtd} Hambúrguer Simples!`)
            console.log(`Seu pedido ficou R$${(qtd * 4).toFixed(2)}`)
            break
        case 300:
            console.log(`Você pediu ${qtd} Cheeseburguer!`)
            console.log(`Seu pedido ficou R$${(qtd * 5.5).toFixed(2)}`)
            break
        case 400:
            console.log(`Você pediu ${qtd} Bauru!`)
            console.log(`Seu pedido ficou R$${(qtd * 7.5).toFixed(2)}`)
            break
        case 500:
            console.log(`Você pediu ${qtd} Refrigerante!`)
            console.log(`Seu pedido ficou R$${(qtd * 3.5).toFixed(2)}`)
            break
        case 600:
            console.log(`Você pediu ${qtd} Suco!`)
            console.log(`Seu pedido ficou R$${(qtd * 2.8).toFixed(2)}`)
            break
        default:
            console.log("produto não existente")
            break
    }
}

pedido(100, 2)
pedido(200, 3)
pedido(300, 1)
pedido(400, 4)
pedido(500, 2)
pedido(600, 3)
