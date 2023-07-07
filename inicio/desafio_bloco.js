/*
    Exibir os numeros impares e depois os numeros pares,
    separando dentro de dois blocos
*/

{
    for(i=1; i<=10; i++)
        if(i%2 != 0)
        console.log(i)
}

console.log("")

{
    for(i=1; i<=10; i++)
        if(i%2 == 0)
        console.log(i)
}