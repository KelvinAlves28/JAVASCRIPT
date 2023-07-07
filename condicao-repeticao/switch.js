const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
            console.log("A+")
            break
        case 9:
            console.log("A")
            break
        case 8:
            console.log("A-")
            break
        case 7:
            console.log("B+")
            break
        case 6:
            console.log("B")
            break
        case 5:
            console.log("B-")
            break
        case 4:
            console.log("C")
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("D")
            break
        default:
            console.log("Nota Inválida")
    }
}

imprimirResultado(8.7)