// primitivo en typescript

//string

let nombre : string = "Irene";
let cp : string = "23680";

let mensaje : string =`Bienvenido D/D-a ${nombre}--> cp ${cp}`


function procesarTexto (texto : string) :string{
    return texto.trim().toUpperCase();
}

//console.log(procesarTexto(mensaje))
console.log(procesarTexto(mensaje));


let saludo = "Que tal todo";    //esto es inferir , pese no declarar el tipo , lo toma como string ; lo sobreentiende
procesarTexto(saludo);

//number

function calcularPrecioFinal (precio:number, impuesto:number, descuento : number) : number{
    return (precio * (1+(impuesto)/100) * ((1 - descuento)/100));
}

console.log(calcularPrecioFinal(100, 21, 3));



//cualquier tipo -->   any (NO USAR SALVO QUE NO HAYA MAS REMEDIO)
//funcion que verifique que lo que le pase como parametro es un numero .
//No es infinito, !isNaN

function esNumero (numbers : any) : boolean{
    return typeof numbers === "number" && isFinite(numbers) && !isNaN(numbers) ;
}


//calcular el promedio de total de los elementos de un array de numeros

function calcularPromedio (numbers : number[]) : number{

    if(numbers.length === 0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }

    const suma :number = numbers.reduce((acc, num) => acc+num, 0);
    return suma / numbers.length;

}

//calcular el maximo y minimo llamada la funcion calcularExtrmeos

function calcularExtremos (numbers : number[]) :{max:number; min:number} {
        if(numbers.length === 0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return {max,min};
}


//boolean

let esMayorDeEdad : boolean = true;

console.log(esMayorDeEdad);

// comprobar si un email es correcto o no   recibe un parametro string y devuelve un boolean

function esEmailValido(email : string) : boolean{
    const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

esEmailValido("ijimhin345@g.educaan.es");


//interface Tipo de dato generado  por el usuario para una determinada situacion

interface permisosUsuario {
    puedeLeer: boolean,
    puedeEscribir: boolean,
    puedeBorrar: boolean,
}

//dependiento del tipo de usuario , crear una funcion llamada obtenerPerminsos dependido de si el user es admin user o invitado cambie los permisos de la interfaz

type tipoUsuario = "admin" | "invitado" | "usuario"; // type permite crear un tipo de dato entre unos valores dados


function obtenerPermisos({ usuario }: { usuario: tipoUsuario }): permisosUsuario {
    switch (usuario) {
        case "invitado":
            return {
                puedeLeer: true,
                puedeEscribir: false,
                puedeBorrar: false,
            };
        case "usuario":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: false,
            };
        case "admin":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: true,
            };
        default:
            // Este caso no debería ocurrir si el tipo es correcto
            const exhaustiveCheck: never = usuario;
            throw new Error(`Tipo de usuario no reconocido: ${exhaustiveCheck}`);
    }
}

obtenerPermisos({ usuario: "usuario" });

//null y undefined   

let posibleNombre : string | null="Invitado"
let posibleNombreIndefinidi: string | undefined=undefined;



//funcion a la que se le pasa un numero y lo multiplica por 2 ; con arrow function

const duplicar = (num : number) : number => num * 2;
//crear una funcion que le pase como parametro un array de objetos y le devuelva los usuarios mayores de edad

const usuarios = [
    {nombre: "Irene", edad: 18},
    {nombre: "Sofia", edad: 12},
    {nombre: "Maria", edad: 11},    
]


const mayoresEdad = (usuarios : {nombre: string, edad: number}[]) : {nombre: string, edad: number}[] => {
    return usuarios
    .filter((user) => user.edad >= 18);
}

console.log(mayoresEdad(usuarios));


// funcion procesarNumeros que cree devuelva un array de numeros solo los posibivos multiplicados por 2 y ordenados de menor a mayor


function procesarNumeros (numeros : number[]) : number[] {
    return numeros
    .filter((num) => num > 0)
    .map((num) => num * 2)
    .sort((a, b) => a - b);
}



// tengo una interfaz de cliente  que tiene id nombre email telefono se pide crear una funcion que genere un map con la siguiente estructura

//{idUsuario: 1, nombre: "string", email: "string", telefono: "string",}

interface cliente {
    idUsuario: number,
    nombre: string,
    email: string,
    telefono: string,
}

const clientes : cliente[] = [
  {
    "idUsuario": 101,
    "nombre": "Ana García",
    "email": "ana.garcia@ejemplo.com",
    "telefono": "600-111-222"
  },
  {
    "idUsuario": 102,
    "nombre": "Pedro López",
    "email": "pedro.lopez@ejemplo.com",
    "telefono": "600-333-444"
  },
  {
    "idUsuario": 103,
    "nombre": "María Rodríguez",
    "email": "maria.rodriguez@ejemplo.com",
    "telefono": "600-555-666"
  },
  {
    "idUsuario": 104,
    "nombre": "Javier Fernández",
    "email": "javier.fernandez@ejemplo.com",
    "telefono": "600-777-888"
  },
  {
    "idUsuario": 105,
    "nombre": "Laura Martínez",
    "email": "laura.martinez@ejemplo.com",
    "telefono": "600-999-000"
  },
  {
    "idUsuario": 106,
    "nombre": "Carlos Sánchez",
    "email": "carlos.sanchez@ejemplo.com",
    "telefono": "611-111-222"
  },
  {
    "idUsuario": 107,
    "nombre": "Sofía Pérez",
    "email": "sofia.perez@ejemplo.com",
    "telefono": "611-333-444"
  },
  {
    "idUsuario": 108,
    "nombre": "David Gómez",
    "email": "david.gomez@ejemplo.com",
    "telefono": "611-555-666"
  }
]


const clientesMap = clientes.map((cliente) => {
    return {
        idUsuario: cliente.idUsuario,
        nombre: cliente.nombre,
        email: cliente.email,
        telefono: cliente.telefono,
    }
});

console.log(clientesMap);



//calculadora simple cear una calculadora tipada que realize operaciones basicas para ello partimos de una interfaz llama Operacion  formada por tipo con 4 posibles opciones(sumar, restar , multiplicar , dividir)  operando 1 y operando2;
//crear funcion llamada calculadora que se le pasara como parametro una operacion de tipo operacion y nos devolvera sengun el tipo el  calculo de los 2 operando 
// probarlo con 10 5   y otra con 10 0

//se podria ampliar a otras operaciones