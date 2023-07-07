function saque(valor){
    total = valor
    ced = 50
    totced = 0
    while (true){
        if (total >= ced){
            total -= ced
            totced += 1
        } else{
            if (totced > 0){
                console.log(`${totced} nota(s) de ${ced}`)
            }
            if (ced == 50){
                ced = 20
            }else if(ced == 20){
                ced = 10
            }else if(ced == 10){
                ced = 5
            }else if(ced == 5){
                ced = 1
            }
            totced = 0
            if (total == 0){
                break
            }
        }
    }
}

saque(247)