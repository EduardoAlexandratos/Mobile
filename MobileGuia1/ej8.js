var sonpares = [2,4,25,24,3,12];
var CuantosCumplen=0;
var quienCumple = sonpares.filter(i =>{if(i%2==0){ CuantosCumplen++;}} );
console.log("los elementos pares son  " + CuantosCumplen);