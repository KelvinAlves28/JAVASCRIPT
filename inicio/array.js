const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0])
console.log(valores[2])
console.log(valores[4])

valores[4] = 10
console.log()

console.log(valores[0])
console.log(valores[2])
console.log(valores[4])

valores[10] = 3.5
console.log()

console.log(valores)

console.log("Quantidade array:", valores.length)

valores.push(1.9, false, null, "teste", {id: 2}) //errado, usar sempre tipos de dados homogêneos
console.log(valores)

valores.pop() // apaga o ultimo valor da array
valores.pop()
console.log(valores)

delete valores[13] // apaga determinado valor da array
delete valores[12]
console.log(valores)

console.log(typeof(valores))