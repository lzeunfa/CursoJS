function contar() {
    var txtinicio = document.getElementById('txtinicio');
    var inicio = Number(txtinicio.value);

    var txtfim = document.getElementById('txtfim');
    var fim = Number(txtfim.value);

    var txtpasso = document.getElementById('txtpasso');
    var passo = Number(txtpasso.value);

    var resultado = document.getElementById('resultado');

    resultado.innerHTML = 'Começando a contagem...';

    if(inicio>fim){
        for(var contagem=inicio;contagem>=fim;contagem-=passo){
            resultado.innerHTML+=`${contagem}...`
        }
    }else{
        for(var contagem=inicio;contagem<=fim;contagem+=passo){
            resultado.innerHTML+=`${contagem}...`
        }
    }
    resultado.innerHTML+=`fim da contagem`
}

