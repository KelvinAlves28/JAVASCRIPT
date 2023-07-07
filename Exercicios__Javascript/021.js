function convenio(idade){
    if (idade < 10){
        console.log(`O valor a ser pago é de R$${(100+80).toFixed(2)}`)
    }else if (idade >= 10 && idade <= 30){
        console.log(`O valor a ser pago é de R$${(100+50).toFixed(2)}`)
    }else if (idade > 30 && idade <=60){
        console.log(`O valor a ser pago é de R$${(100+95).toFixed(2)}`)
    }else {
        console.log(`O valor a ser pago é de R$${(100+130).toFixed(2)}`)
    }
}

convenio(72)