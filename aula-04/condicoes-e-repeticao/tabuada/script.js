
function gerarTabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        let res = `${n*c}`

    }  
}

let corpo = document.querySelector('body')
let div = document.createElement('div')
div.className = 'cubo'
body.appendChild(div)