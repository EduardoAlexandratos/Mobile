function quienesAprobaron(alumnos){
    return alumnos.filter(aprobaron);
}


function aprobaron(array){
    let aprobacion = (i)=>i>=4;
    return array.every(aprobacion);
}


console.log(quienesAprobaron([[9,8,8,4],[6,9,6,9],[4,2,0,4],[8,8,8,8]]));
