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


///---------------INICIALIZAR LA APLICACION------------------------

//llamar a la funcion
console.log(suma (3,5));
console.log(suma (10,5));
console.log(suma (7));
console.log(suma ());

suma,(4,6)