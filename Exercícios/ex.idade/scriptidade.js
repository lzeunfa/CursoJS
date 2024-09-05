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
        img.style.borderRadius = `50%`
        verificado.style.textAlign = `center`
        if(txtsexo[0].checked){
            sexo = `homem`
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute(`src`, `img/bbhomem.jpg`)
                img.style.width = `300px`
                img.style.height = `280px`
                verificado.innerHTML = `<p>Detectamos que você é uma criança ${sexo} e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }else if(idade<=20){
                //jovem
                img.setAttribute(`src`, `img/jvhomem.jpg`)
                img.style.width = `300px`
                img.style.height = `260px`
                verificado.innerHTML = `<p>Detectamos que você é um jovem ${sexo} e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }else if(idade<=50){
                //adulto
                img.setAttribute(`src`, `img/adthomem.jpg`)
                img.style.width = `300px`
                img.style.height = `280px`
                verificado.innerHTML = `<p>Detectamos que você é um ${sexo} adulto e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }else{
                //idoso
                img.setAttribute(`src`, `img/idoso.jpg`)
                img.style.width = `300px`
                img.style.height = `280px`
                verificado.innerHTML = `<p>Detectamos que você é um ${sexo} idoso e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }

        }else if(txtsexo[1].checked){
            sexo = `mulher`
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute(`src`, `img/bbmulher.jpg`)
                img.style.width = `300px`
                img.style.height = `265px`
                verificado.innerHTML = `<p>Detectamos que você é uma criança ${sexo} e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }else if(idade<=20){
                //jovem
                img.setAttribute(`src`, `img/jvmulher.jpg`)
                img.style.width = `300px`
                img.style.height = `280px`
                verificado.innerHTML = `<p>Detectamos que você é uma jovem ${sexo} e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }else if(idade<=50){
                //adulta
                img.setAttribute(`src`, `img/adtmulher.jpg`)
                img.style.width = `300px`
                img.style.height = `260px`
                verificado.innerHTML = `<p>Detectamos que você é uma ${sexo} adulta e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }else{
                //idosa
                img.setAttribute(`src`, `img/idosa.jpg`)
                img.style.width = `300px`
                img.style.height = `280px`
                verificado.innerHTML = `<p>Detectamos que você é uma ${sexo} idosa e tem ${idade} anos!</p>`
                verificado.appendChild(img)
            }

        }
    }

}