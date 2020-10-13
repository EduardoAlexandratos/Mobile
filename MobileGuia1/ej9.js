let numeritos = [2,4,3,10,33,11]
let even = i => i % 2 === 0

function rechazar(rechazo, numeritos){
    return numeritos.filter(numero => !rechazo(numero))
}

console.log( rechazar(even, numeritos) )