function simples(capInicial, juros, tempo){
    capFinal = capInicial + (capInicial * juros * tempo)
    console.log(`Montante sob juros simples: ${capFinal.toFixed(2)}`)
}

simples(2000, 0.05, 4)

function composto(capInicial, juros, tempo){
    capFinal = capInicial * Math.pow((1 + juros), tempo)
    console.log(`Montante sob juros compostos: ${capFinal.toFixed(2)}`)
}

composto(2000, 0.05, 4)