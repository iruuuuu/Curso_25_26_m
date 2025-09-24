// Ejercicio 3 - Gestion bancaria

/* Consiste en gestionar un pequeño sistema bancario con Javascript que permita:
crear cuentas con titular y saldo
insertar dinero a una cuenta,
retirar dinero de una cuenta (siempre que no tenga saldo negativo), 
consultar el saldo de la cuenta,
transferir dinero entre cuentas siempre que haya dinero para transferir
mantener un listado de cuentas y buscar cuentas por titular.
cuando creemos una cuenta se debe de generar un numero de cuenta.
Documentacion en cada funcion. 
Test con console log,
Crear funcion test solo poner test y que al hacer test() lo haga todo
*/


///---------------------- Variables globales ----------------------

// Lista de cuentas
let cuentas = [];

// Función para generar un número de cuenta único
function generarNumeroCuenta() {
    return "ACC" + Math.floor(Math.random() * 1000000);
}

// Crear una cuenta nueva
function crearCuenta(titular, saldoInicial = 0) {
    const cuenta = {
        numero: generarNumeroCuenta(),
        titular: titular,
        saldo: saldoInicial
    };
    cuentas.push(cuenta);
    console.log(`Cuenta creada para ${titular}. Número: ${cuenta.numero}, Saldo: ${cuenta.saldo}`);
    return cuenta;
}


///------------------- Funciones de operaciones -------------------

/**
 * Inserta dinero en la cuenta
 */
function insertarDinero(cuenta, cantidad) {
    cuenta.saldo += cantidad;
    console.log(`Se han insertado ${cantidad}€. Nuevo saldo de ${cuenta.numero}: ${cuenta.saldo}€`);
}

/**
 * Retira dinero de la cuenta, siempre que haya saldo suficiente
 */
function retirarDinero(cuenta, cantidad) {
    if (cuenta.saldo >= cantidad) {
        cuenta.saldo -= cantidad;
        console.log(`Se han retirado ${cantidad}€. Nuevo saldo de ${cuenta.numero}: ${cuenta.saldo}€`);
    } else {
        console.log("Fondos insuficientes para realizar el retiro.");
    }
}

/**
 * Consulta el saldo de la cuenta
 */
function consultarSaldo(cuenta) {
    console.log(`Saldo de la cuenta ${cuenta.numero}: ${cuenta.saldo}€`);
}

/**
 * Transferir dinero entre dos cuentas
 */
function transferirDinero(origen, destino, cantidad) {
    if (origen.saldo >= cantidad) {
        origen.saldo -= cantidad;
        destino.saldo += cantidad;
        console.log(`Transferencia realizada de ${cantidad}€ de ${origen.numero} a ${destino.numero}`);
    } else {
        console.log("Fondos insuficientes para la transferencia.");
    }
}

/**
 * Buscar una cuenta por titular
 */
function buscarCuentaPorTitular(nombre) {
    return cuentas.filter(cuenta => cuenta.titular.toLowerCase().includes(nombre.toLowerCase()));
}


///---------------------- Función de Test ----------------------

function test() {
    console.log("=== INICIO DE TEST DEL SISTEMA BANCARIO ===");

    // Crear cuentas
    const cuenta1 = crearCuenta("Juan Perez", 1000);
    const cuenta2 = crearCuenta("Maria Lopez", 500);
    const cuenta3 = crearCuenta("Carlos Sanchez", 200);

    console.log("\n--- Depositar dinero ---");
    insertarDinero(cuenta1, 200);

    console.log("\n--- Retirar dinero ---");
    retirarDinero(cuenta2, 100);
    retirarDinero(cuenta2, 600); // probar fondos insuficientes

    console.log("\n--- Consultar saldos ---");
    consultarSaldo(cuenta1);
    consultarSaldo(cuenta2);
    consultarSaldo(cuenta3);

    console.log("\n--- Transferencia ---");
    transferirDinero(cuenta1, cuenta3, 300);
    consultarSaldo(cuenta1);
    consultarSaldo(cuenta3);

    console.log("\n--- Buscar cuentas ---");
    console.log(buscarCuentaPorTitular("maria"));
    console.log(buscarCuentaPorTitular("juan"));

    console.log("=== FIN DEL TEST ===");
}

// Ejecutamos el test automáticamente
test();
