function mediaNota(nota){
    if(nota >= 7){
        console.log("Aprovado com", nota)
    }
}

mediaNota(8.1)
mediaNota(6.1)

function verdadeiroOuFalso(valor){
    if(valor) {
        console.log("É verdade...", valor)
    }
}

verdadeiroOuFalso()
verdadeiroOuFalso(null)
verdadeiroOuFalso(true)
verdadeiroOuFalso(false)
verdadeiroOuFalso(0)
verdadeiroOuFalso(1)