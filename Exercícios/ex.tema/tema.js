var div = document.getElementById(`div`)
var txt = document.getElementById(`txt`)

document.body.style.background= `black`
div.style.background= `white`
txt.style.color= `black`

function clicar(){
    if (document.body.style.background=== `black`){
        document.body.style.background= `white`
        div.style.background= `black`
        txt.style.color= `white`

    }else if(document.body.style.background=== `white`){
        document.body.style.background= `black`
        div.style.background= `white`
        txt.style.color= `black`
    }

}
