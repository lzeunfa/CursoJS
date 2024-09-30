var nums = []

function adicionar(){
    var txtnum = document.getElementById(`txtnum`)
    var num = Number(txtnum.value)

    var resultado = document.getElementById(`resultado`)

    if (num>100 || num<1){
        window.alert(`[ERRO] respeite as condições solicitadas e insira novamente os dados`)
    }else if (nums.includes(num)){
        window.alert(`Este número já foi inserido!`)
    }else{
        nums.push(num)
        resultado.innerHTML += `Número ${nums.join(`,`)} adicionado <br>`
    }
}