var amigo = {nome: 'José',
     sexo: 'M',
      peso:70,
       engordar(p){
        console.log('Engordou')
        	this.peso += p
    }}
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso} Kg`)
