function aumento(plano, sal){
    switch(plano.toUpperCase()){
        case "A":
            console.log("Seu aumento será de 10%!")
            console.log(`Salário atual: R$${sal}`)
            console.log(`Salário novo: R$${sal += (sal*0.1)}`)
            break
        case "B":
            console.log("Seu aumento será de 15%!")
            console.log(`Salário atual: R$${sal}`)
            console.log(`Salário novo: R$${sal += (sal*0.15)}`)
            break
        case "C":
            console.log("Seu aumento será de 20%!")
            console.log(`Salário atual: R$${sal}`)
            console.log(`Salário novo: R$${sal += (sal*0.20)}`)
            break
        default:
            console.log("O seu plano é inválido")
            break
    }
}

aumento("a", 1000)
aumento("b", 1000)
aumento("c", 1000)
