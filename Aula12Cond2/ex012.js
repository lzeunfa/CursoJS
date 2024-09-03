var agora = new Date()
var hora = agora.getHours()

if(hora>=18 && hora<=23){
    console.log(`São ${hora} horas, Boa Noite!`)
}else if(hora>=12){
    console.log(`São ${hora} horas, Boa Tarde!`)
}else{
    console.log(`São ${hora} horas, Bom dia!`)
}