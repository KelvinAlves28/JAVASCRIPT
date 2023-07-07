function comprarCarro(tipo){
    console.log("1. Hatch\n2. Sedans\n3. Motocicletas\n4. Caminhonetes")
    switch(tipo){
        case 1:
            console.log("Compra efetuada com sucesso!")
            break
        case 2:
            console.log("Tem certeza que não prefere este modelo?")
            break
        case 3:
            console.log("Tem certeza que não prefere este modelo?")
            break
        case 4:
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui!")
            break
    }
}

comprarCarro(8)