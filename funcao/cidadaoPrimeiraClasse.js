// criando função de forma literal
function funcao1(){

}

// armazendando uma função em uma variável
const funcao2 = function() {

}

// armazendo uma função em uma array
const array = [function(a, b) {
    return a + b
}, funcao1, funcao2]

console.log(array[0](2, 3))

// armazenando uma função em um atributo de objeto
const obj = {}
obj.falar = function(){
    return "Opa"
}
console.log(obj.falar())

//Passar função como paramentro
function run(fun){
    fun()
}
run(function(){
    console.log("Executando...")
})

// usando função para retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(5)