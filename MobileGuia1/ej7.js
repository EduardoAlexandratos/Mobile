function hayAlgunNegativo(array){
    let negatividad = (i)=>i<0;
    return array.some(negatividad);
    
    }
    console.log(hayAlgunNegativo([-1,-2,-3,-4])); //para el true
    console.log(hayAlgunNegativo([2,4,5,6]));  //para el false