function calcular(){
    //abaixo a parte de anos
    var txtano = document.getElementById(`txtano`)//recebe a resposta do input ano
    var anon = Number(txtano.value) // transforma a resposta string em número

    var ano = new Date()
    var anoat = ano.getFullYear()//pega o ano atual

    var idadea = 0 // para receber o valor dos anos de vida

    var respa = document.getElementById(`tmanos`)//recebe o marker para colocar os anos de vida

    // acima era a parte de anos

    //abaixo a parte de meses
    var txtmes = document.getElementById(`txtmes`)//recebea resposta do input mes
    var mesn = Number(txtmes.value)//transforma a resposta de string para numero

    var mes = new Date()
    var mesat = mes.getMonth()//recebe o mês atual

    var idadem = 0 //para receber o valor dos meses de vida

    var respm = document.getElementById(`tmmeses`)//recebe o marker para colocar os meses de vida
    
    //acima era a parte de meses

    //abaixo a parte de dias
    var txtdia = document.getElementById(`txtdia`)
    var dian = Number(txtdia.value)

    var dia = new Date()
    var diat = dia.getDay()

    var idaded= 0

    var respd = documnet.getElementById(`tmdias`)

    //acima era a parte de dias
    


    if(anon>anoat){//ano de nascimento amior que o ano atual da erro
        window.alert(`[ERRO] coloque novamente seus dados`)
    }
    
}