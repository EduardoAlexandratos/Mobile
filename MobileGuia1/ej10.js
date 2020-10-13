function contiene ( numero, array){
    let condicion = n => numero === n;
    return array.some(condicion);
}

let numeros = [11,12,13,14,15,16,17,18,10];
let numero = 10;

console.log( contiene(numero, numeros) );