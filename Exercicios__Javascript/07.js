function bhaskara(a, b, c){
    delta = b * b - 4 * a * c
    if(delta < 0){
        console.log("O Delta é negativo")
    }else{
        var resultados = [((-b + Math.sqrt(delta)) / (2 * a)).toFixed(3),
        ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(3)]
        
        console.log(`x1: ${resultados[0]}`)
        console.log(`x2: ${resultados[1]}`)
    }
    
}

bhaskara(5, 10, 2)