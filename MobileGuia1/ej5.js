function aprobo(array){
    return array.every(aprobacion);
}
var aprobacion = (i)=>i>=4;

console.log(aprobo([4,5,6])); //para el true
console.log(aprobo([2,1,3])); //para el false