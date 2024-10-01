var nums = []

function adicionar(){
    var txtnum = document.getElementById(`txtnum`)
    var num = Number(txtnum.value)

    var resultado = document.getElementById(`resultado`)

    var btfinal = document.getElementById(`finalizar`)

    var resp = document.getElementById(`resp`)


    if (num>100 || num<1){
        window.alert(`[ERRO] respeite as condições solicitadas e insira novamente os dados`)
    }else if (nums.includes(num)){
        window.alert(`Este número já foi inserido!`)
    }else{
        nums.push(num)
        resultado.innerHTML += `Número ${num} adicionado <br>`
    }

    if (btfinal.style.display=`none`){
        btfinal.style.display=`block`
    }

    nums.sort()
}

function finalizar(){
    resp.innerHTML = ``

    var soma = 0

    var media = 0

    if(nums.lenght==0){
        resp.innerHTML = ``
    }else{
        resp.innerHTML += `Ao todo temos ${nums.length} números registrados<br>`
        resp.innerHTML += `O maior valor informado foi o ${Math.max(...nums)} <br>`
        resp.innerHTML += `O menor valor informado foi o ${Math.min(...nums)} <br>`

        for(var c=nums.length -1; c>=0; c--){
            soma += nums[c]
        }
        resp.innerHTML += `A soma dos números é ${soma} <br>`

        media = soma/nums.length
        resp.innerHTML += `A média dos números é ${media} <br>`
    }
    
}