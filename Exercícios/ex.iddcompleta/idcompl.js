function clicar(){
    //abaixo a parte de anos
    var txtano = document.getElementById(`txtano`)//recebe a resposta do input ano
    var anon = Number(txtano.value) // transforma a resposta string em número

    var tmtxtanos = document.getElementById(`tmtxtanos`)

    var ano = new Date()
    var anoat = ano.getFullYear()//pega o ano atual

    var idadea = 0 // para receber o valor dos anos de vida

    var respa = document.getElementById(`tmanos`)//recebe o marker para colocar os anos de vida

    // acima era a parte de anos

    //abaixo a parte de meses
    var txtmes = document.getElementById(`txtmes`)//recebea resposta do input mes
    var mesn = Number(txtmes.value)//transforma a resposta de string para numero

    var tmtxtmeses = document.getElementById(`tmtxtmeses`)//para alterar plural e singular da palavra mês

    var mes = new Date()
    var mesat = mes.getMonth()//recebe o mês atual

    var idadem = 0 //para receber o valor dos meses de vida

    var mesc = 0

    var respm = document.getElementById(`tmmeses`)//recebe o marker para colocar os meses de vida
    
    //acima era a parte de meses

    //abaixo a parte de dias
    var txtdia = document.getElementById(`txtdia`)
    var dian = Number(txtdia.value)

    var dia = new Date()
    var diat = dia.getDate()

    var idaded= 0

    var analise = 0

    var respd = document.getElementById(`tmdias`)

    //acima era a parte de dias

    if(anon>anoat){
        window.alert(`[ERRO] insira seus dados novamente`)
    }else if(mesat>=mesn){
        idadea = anoat - anon
            idadem = (mesat-mesn+1)
            
            if(idadem==1){
                tmtxtmeses.innerHTML=`Mês`
                
            }else{
                tmtxtmeses.innerHTML=`Meses`
            }

            if(idadea==1 && idadea!=0){
                tmtxtanos.innerHTML=`Ano`
            }
            respm.innerHTML=`${idadem}`
            respa.innerHTML=`${idadea}`
    }else{
        idadea = anoat - anon -1
            idadem = (13-mesn)+mesat

            if (idadem==12){
                idadem=0
                idadea++
                
                respm.innerHTML=`${idadem}`
                respa.innerHTML=`${idadea}`
            }else{
                respa.innerHTML=`${idadea}`
                respm.innerHTML=`${idadem}`
            }

            if(idadea==1){
                tmtxtanos.innerHTML=`Ano`
            }

            if(idadem==1){
                tmtxtmeses.innerHTML=`Mês`
            }else{
                tmtxtmeses.innerHTML=`Meses`
            }
    }
    
}