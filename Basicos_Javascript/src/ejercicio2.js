//Crear un juego de dados que utilizando la funcion "tirar" dado permita tirar un dado de 6 caras con valores 1 al 6.
//Ademas crear una funcion llamada simular que le pase el numero de tirardas y me diga que numero se ha repetido mas veces.

///----------------------Declarar las variables---------------

// Función para tirar un dado de 6 caras
// ---------------------------
// Usamos Math.random() que devuelve un número entre 0 y 1
// Según el intervalo donde caiga ese número, devolvemos un valor del 1 al 6

function tirar() {
  let aleatorio = Math.random();

  if (aleatorio < 1/6) return 1;
  else if (aleatorio < 2/6) return 2;
  else if (aleatorio < 3/6) return 3;
  else if (aleatorio < 4/6) return 4;
  else if (aleatorio < 5/6) return 5;
  else return 6;
}

// ---------------------------DECLARAR LAS FUNCIONES---------------------------

// Recibe como parametro la cantidad de tiradas a realizar
/**
 * 
 * @param {number} tiradas - numero de tiradas a realizar 
 */
function jugar(tiradas) {
  // Array para contar cuantas veces salio cada numero (indice 0 → numero 1, indice 5 → numero 6)
  let contadorNumeros = [0, 0, 0, 0, 0, 0];

  // Repetimos las tiradas
  for (let i = 0; i < tiradas; i++) {
    let resultado = tirar();              // Tiramos el dado
    contadorNumeros[resultado - 1]++;              // Sumamos 1 al contador del numero obtenido
    console.log("Tirada " + (i + 1) + ": " + resultado);
  }


  // Buscar cuál número se repitió más veces

  let max = contadorNumeros[0];          // Guardamos el valor maximo inicial (el del numero 1)
  let numeroMasRepetido = 1;    // Por defecto, el número mas repetido es el 1

  // Recorremos el array para ver si hay un numero con mas repeticiones
  for (let i = 1; i < contadorNumeros.length; i++) {
    if (contadorNumeros[i] > max) {
      max = contadorNumeros[i];              // Nuevo maximo encontrado
      numeroMasRepetido = i + 1;    // Guardamos el numero (i+1 porque el indice 0 es el numero 1)
    }
  }

//---------------------------------------------------------------------------------



  // ---------------------------INICIALIZAR LA APLICACION---------------------------
  console.log("Contador de tiradas:", contadorNumeros);
  console.log("El número que mas repetido fue el " + numeroMasRepetido + " (" + max + " veces)");
}

// ---------------------------EJEMPLO DE USO---------------------------

// Aquí decimos que queremos jugar 5 tiradas
jugar(5);
