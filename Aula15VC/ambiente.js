var num = [5, 2, 8, 9, 3]

num.push(1)

console.log(`Nosso vetor é o ${num}`)

console.log(`Nosso vetor é o ${num.sort()}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

/*
for(var c=0; c<num.length; c++){
    console.log(`a posição ${c} recebe o elemento ${num[c]}`)
}

//outra forma e mais simplificada abaixo

for (var c in num){
    console.log(num[c])
}

*/

var c = num.indexOf(5)

console.log(`O valor 5 está na posiçãp ${c}`)