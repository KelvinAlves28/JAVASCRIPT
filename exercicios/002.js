const prompt = require("prompt-sync")()

let idade = prompt("Digite a sua idade: ")

dias = idade*365
console.log("Sua idade possui", dias, "dias")