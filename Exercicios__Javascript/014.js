function frutas(fruta){
    switch(fruta){
        case "maçã":
            console.log("Não vendemos maçãs aqui!")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis!")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo!")
            break
        default:
            console.log("Fruta inválida!")
            break
    }
}

frutas("maçã")
frutas("kiwi")
frutas("melancia")
frutas("abacaxi")
frutas("morango")