class Persona{
    nombre;
    edad;

    constructor(edad, nombre){
        this.edad = edad;
        this.nombre = nombre;
       
        this.presentarse = hola => console.log("que tal soy "+this.nombre+" y tengo "+this.edad+" añotes");
    }

   

}

class Estudiante extends Persona{
    profesor;

    constructor(nombre,edad,profesor){
        super(nombre,edad);
        this.profesor = profesor;
    }
    estudiando() {
        console.log("Estudiando con "+this.profesor);
    }
    setProfesor(nombre){
        this.profesor = nombre;
    }
}
var college = new Estudiante("Eusebio",20);

college.setProfesor("Alejandro Paimon");
college.estudiando();