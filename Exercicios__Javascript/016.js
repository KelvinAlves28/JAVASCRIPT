function calculadora(n1, op, n2){
    switch(op){
        case "+":
            console.log(`${n1} ${op} ${n2} = ${n1 + n2}`)
            break
        case "-":
            console.log(`${n1} ${op} ${n2} = ${n1 - n2}`)
            break
        case "*":
            console.log(`${n1} ${op} ${n2} = ${n1 * n2}`)
            break
        case "/":
            console.log(`${n1} ${op} ${n2} = ${n1 / n2}`)
            break
        default:
            console.log("Operador inválido")
            break
    }
}

calculadora(2, "+", 3)
calculadora(7, "-", 3)
calculadora(2, "*", 3)
calculadora(8, "/", 2)
calculadora(2, "%", 3)