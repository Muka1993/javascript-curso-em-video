
let num = [5,8,3]
num.push(7,9)
num.sort
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let valores = [8, 1, 7, 4, 2, 9]

// for(let pos=0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }


let arrays = [1, 5, 6, 9, 12]
arrays.sort
for(let pos in arrays){
    console.log(`A posição ${pos} tem o valor ${arrays[pos]}`)
}

function clickMe(){
    if(arrays.indexOf(1)){
        window.alert('Nao tem')
    } else {
        window.alert('tem sim')
    }
}