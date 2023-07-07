function triangulo(l1, l2, l3){
    if (l1+l2 > l3 && l1+l3 > l2 && l2+l3 > l1){
        if (l1 == l2 && l1 == l3){
            console.log("É um triangulo Equilatero")
        }else if ((l1 == l2 && l1 != l3) || (l1 == l3 && l1 != l2) || (l2 == l3 && l2 != l1) || (l2 == l1 && l2 != l3) || (l3 == l1 && l3 != l2) || (l3 == l2 && l3 != l1)){
            console.log("É um triangulo Isósceles")
        }else if ((l1 != l2 && l1 != l3 && l2 != l3))
            console.log("É um triangulo Escaleno")
    }else{
        console.log("Não é um triângulo!!")
    }
}

triangulo(20, 20, 20)
triangulo(15, 15, 20)
triangulo(12, 15, 20)