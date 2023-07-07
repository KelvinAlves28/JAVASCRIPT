function tratarErroELancar(erro){
    //throw new Error("...")
    //throw 10
    //throw true
    throw "mensagem de erro"
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e) {
        tratarErroELancar(e)
    }
}

const obj = {nome: "Kelvin"}

imprimirNomeGritado(obj)