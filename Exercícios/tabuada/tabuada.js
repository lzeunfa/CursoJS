function tabuar(){
    var txtnum = document.getElementById(`txtnum`)
    var num = Number(txtnum.value)
    var num2 = 1

    var tabela = 0
    var resultado = document.getElementById(`resultado`)

    resultado.innerHTML=``

    while (num2<=10){
        tabela = num * num2

        var paragrafo= document.createElement(`p`)
        paragrafo.innerText=`${num2} X ${num} = ${tabela}  `

        resultado.appendChild(paragrafo)
        
        num2++
    }

}