function verificar(){
    //área para receber o ano atual
    var agora = new Date()
    var anoat = agora.getFullYear()

    //área para receber o ano inputado
    var txtano = document.getElementById(`txtano`)
    var anon = Number(txtano.value)

    //calcular a idade
    var idade = anoat - anon

    //área para receber o <p> para emitir o texto da idade
    var verificado = document.getElementById(`txt`)

    //área para o sexo

    //área para erro de ano
    if(anon == 0 || anon>anoat){
        window.alert(`Verifique os dados e tente novamente [ERRO]`)
    }else {
        var txtsexo = document.getElementsByName(`sexo`)
        var idade = anoat - anon
        var sexo = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if(txtsexo[0].checked){
            sexo = `Homem`
            if(idade>=0 && idade<10){
                //criança
            }else if(idade<=20){
                //jovem
            }else if(idade<=50){
                //adulto
            }else{
                //idoso
            }

        }else if(txtsexo[1].checked){
            sexo = `Mulher`
            if(idade>=0 && idade<10){
                //criança
            }else if(idade<=20){
                //jovem
            }else if(idade<=50){
                //adulto
            }else{
                //idoso
            }
            
        }
        verificado.style.textAlign = `center`
        verificado.innerHTML = `<p>Detectamos que você é ${sexo} e tem${idade} anos!</p>`
    }

}