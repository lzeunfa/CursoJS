function carregar(){
    var msg = window.document.querySelector(`div.msg`)

    var img = window.document.getElementById(`img`)

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >=0 && hora <12){
        //bom dia
        img.src = `img/manha.jpg`
        document.body.style.background = `#A55A2A`
    }else if(hora>=12 && hora<18){
        //boa tarde
        img.src = `img/tarde.jpg`
        document.body.style.background = `#6F6C43`
    }else{
        //boa noite
        img.src = `img/noite.jpg`
        document.body.style.background = `#3A2945`
    }
}