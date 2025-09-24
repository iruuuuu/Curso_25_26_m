//Primer ejercicio de Javascript
console.log("Hola Mundo!");

///----------------------Declarar las fariables---------------








///-------------------Declarar la funcion ------------------------------

/**
 * 
 * @param {*number} [a=0] - primer numero a sumar con valor por deecto 0
 * @param {number} [b=0] - segundo numero a sumar con valor por defecto 0
 * @returns {number} - la suma de a y b
 */


//como crear una funcion
function suma (a=0 ,b=0){
    return a + b;
}



//creo la funcion saludar
function saludar (usuario){
    //return "Hola ${usuario}";
    return 'Bienvenido ${usuario ?? "Invitado"}';
}

///---------------INICIALIZAR LA APLICACION------------------------

// condicion ? sje realiza si es true ;se realiza si es false
let edad=18;
edad >=18 ? alert("Eres mayor de edad") :alert ("Eres menor de edad");

// en caso de que esto sea null o undefined ?? hare esto otro
let nombre = "Isaias"

console.log(saludar(usuario));

//llamar a la funcion

console.log('La suma de 4+6 es : ${suma(4,6))   }');


/*
Funcion con un parametro llamada Aprobados como parametro un numero y me diga si estoy aprobado o no estoy aprobado
crear una version 2.0 que si le paso un numero mayor a 9 me diga sobresaliente si es  entre 5 o 9 aprobado por debajo de  suspernso
*/

//Arrow function noob
//const aprobados =  () => {
//    return nota >=5 ? "Aprobado" : "Suspenso";
//}  

//Arrow function profesional
const aprobados =  (nota =0) -->  nota>=5 ? "Aprobado" : "Suspenso";
const aprobadosv2 =  (nota =0) --> (nota>=9 ? "Sobresaliente" : (nota>=5 ? "Aprobado" : "Suspenso"));


console.log(aprobadosv2(9)); 