//Ussode los arrays


//Declaracion:

const edades =[]; //array vacio

const frutas = ["Manzana", "Pera", "Naranja", "Sandia"]; //array con elementos

//usando constructor
const cp = new Array();

const cc = new Array("Madrid", "Barcelona", "Valencia");

//como añadir elementos a un array --- ESTOS MUTAN EL ARRAY (original)
edades.push(10);  //añade al final del array
edades.unshift(10);  //añadir al comienzo

//como eliminar elementos de un array
edades.pop(); //elimina el ultimo elemento y retorna el elemento eliminado
edades.shift(); //elimina el primer elemento y retorna el elemento eliminado


//******** SLICE(extraer trozos de array y devuelve un nuevo array sin mutar el original)
edades.slice(1,3); //extrae desde la posicion 1 hasta la 3 sin incluirla
edades.slice(2); //extrae desde la posicion 2 hasta el final

//ejemplo
const edad = [1,2,3,4,5,6,7,8,9];
numeros.slice(2,5); // [3,4,5]  ; esta seria la salida
console.log(edad); // [1,2,3,4,5,6,7,8,9]  //el original no se ha mutado

// ******** map 

//una funcion que se pasa como parametro a otra funcion se lleama callback

//si hay llaves hay return
//si no hay llaves el return

edades.map ( (edad)-->edad*2 ); // [2,4,6,8,10,12,14,16,18]   ; como salida es el array con los valores multiplicados por 2 sin haber mutado el original
console.log(edad); // [1,2,3,4,5,6,7,8,9]  //el original no se ha mutado



// ********** filter-filtra los elementos de un array y devuelve un nuevo array con los elementos que cumplen la condicion  quiere un  callback
edades.filter( (edad)--> edad >=18); // [18]  ; como salida es el array con los valores mayores o iguales a 18 sin haber mutado el original




//Dado un array de nombre crear una funcion llamada MAYUSCULAS que ponga en mayusculas todos los elementos de ese array

const nombres = ["ana", "juan", "pepe", "maria"];
function mayusculas (arrayNombres){
    return arrayNombres.map ( (nombre) => nombre.toUpperCase() );
}

console.log(mayusculas(nombres)); // ['ANA', 'JUAN', 'PEPE', 'MARIA'





//crear una funcion llamada PreciosconIVA que dado un array de precios me los devuelva con el IVA incluido
const precios = [100, 200, 300, 400];
function PreciosconIVA (arrayPrecios){
    return arrayPrecios.map ( (precio) => (precio * 0.21) + precio );
}
console.log(PreciosconIVA(precios)); // [121, 242, 363, 484]



//Crear una funcion llamada imparesCuadrados que le pase un array de numeros y me devuelva un array con los numeros impares elevados al cuadrado
const numeros = [1,2,3,4,5,6,7,8,9,10];

function imparesCuadrados (arrayNumeros){
    return arrayNumeros.map (arrayNumeros.filter ( (numero) => numero % 2 !== 0 ).map ( (numero) => numero ** 2 ) );
}

console.log(imparesCuadrados(numeros)); // [1, 9, 25, 49, 81]




//crear una funcion llamada noramalizarEmail que le pase un array de emails que pueden llevar espacios al pincipio o al final del email y  me los devuelva sin espacios y en minusculas
const emails = ["pedrojimenez@gmail.com","josejulio@hotmail.com       ","            mariajose@outlook.es"];

function normalizarEmail (arrayEmails){
    // esta funcion quita los espacios y pone en minusculas
    return arrayEmails.map ( (emails) => email.trim().toLowerCase() );
}
console.log(normalizarEmail(emails)); // ['

//crear una funcion llamada Filtrarlongitud que le pase como parametro un array de nombres, un tamaño y me devuelva solo atraves de un array con los nombres cuya longitud es mayor o igual que el parametro que le he colocado



//crear una funcion llamada normalizanombres propios que le pase un array de nombre y me los devuelva con la primera letra en mayusculas y el resto en minusculas

