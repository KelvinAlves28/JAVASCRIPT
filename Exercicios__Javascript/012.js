function fatorial(num){
    atual = num
    final = 0
    for (let i = num; i > 1; i--){
        atual = atual * (i-1)
    }
    console.log(atual)
}

fatorial(5)
fatorial(10)