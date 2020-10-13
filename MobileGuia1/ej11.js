class Persona{
    nombre;
    edad;

    constructor(edad, nombre){
        this.edad = edad;
        this.nombre = nombre;
       
        this.presentarse = hola => console.log("que tal soy "+this.nombre+" y tengo "+this.edad+" añotes");
    }

   

}

var persona = new Persona(20,"Eduardo Alexandratos");

persona.presentarse();