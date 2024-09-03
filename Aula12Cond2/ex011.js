var idade = 67

if(idade>=18 && idade<=66){
    console.log(`Você tem ${idade} anos e tem voto obrigatório`)
}else if (idade>=16){
    console.log(`Você tem ${idade} anos e tem voto opcional`)
}else if(idade>=67){
    console.log(`Você tem ${idade} anos e tem voto opcional`)
}else{
    console.log(`Você tem ${idade} anos e não pode votar`)
}