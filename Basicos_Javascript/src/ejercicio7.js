//Objetos en Javascript


const usuario = {
    nombre:"Irene",
    email: "ijimhin345@gmail.com",
    activo: "true",
}


//para obtener las clases

const claves = Object.keys(usuario);

//--------UTILIDADES------------


//Utilidad verificar si las claves estan todas siguiendo un objeto de partida

//1. ¿Como compruebo que todas claves existe?

function validarCamposRequeridos (objeto,camposRequeridos){
    const clavesObjeto = Object.keys(objeto);
    //retorno verdadero o falso 
    return camposRequeridos.every((campoRequerido)=> {
        return clavesObjeto.indexOf.includes(campo)
    })
}

//data:

const datosFormulario = { name:"carla", active:false};



const esValido= validarCamposRequeridos (datosFormulario, ["name","password","active"])

//paara los valores :values

const producto ={
    nombre: "laptop",
    stock: 100,
    precio:1100,
    destacad:true,
}

//array de valores:
const valores =Object.values(producto);




//verificar si algun valor cumple una condicion; ¿Algun mes la precipitacion fue superior a 100 litros ?
const precipitaciones = {
    enero:110,
    febrero:98,
    marzo:120,
    abril:50
}


const mesSuperiorCien= Object.values(precipitaciones)
    .some((precipitaciones)=> precipitacion >100)


//¿Cuantos litros totales han caido en los meses enero-abril?


const precipitacionesEneroAbril = Object.values(precipitaciones)
.reduce((total,precipitacion)=>total+precipitacion,0) 


//calcular la precipitacion maxima

const maximaPrecipitaciones = Math.max(...Object.values(precipitaciones))



//obtener pares [clave valor] <-- entries()

const configuracion = {
    tema: "oscuro",
    idioma: "es",
    notificaciones:true,
    volumen: 75
}

//Obener array de pares clave valor:

const entradas = Object.entries(configuracion);
/*
    [
        ["tema", "oscuro"],
        ["idioma", "es"],
        ["notificaciones", true],
        ["volumen", 75]
    ]
*/


//++++++++++++++
const usuarioBD = {
    nombre:"Irene",
    password: "xfst20012",
    email: "ijimhin345@gmail.com",
    activo: "true",
}


//eliminar los campos sensibles de este object usuarioDB ("password")
Object.entries(usuarioBD).filter([])





//destructuring , quedarme con partes del objeto


const {nombre, email} = usuarioBD;   // const nombre=usuarioBD.nombre
                                    // const email = usuarioBD.email


const data = [1,2,3,4,5];
const [a,b,c] = data;     //a=1    b=2   c=3,4,5


function vData ([v1,v2]) {
    const [v1,v2]=Array;
    console.log("v1:",v1)
    console.log("v2:",v2)
}

vData ([1,2,3,4,5])       //v1=1    v2= 2,3,4,5



//crear funcion llamada mostrarPersona, obtener  el usrername, y  las 3 primeras redes sociales que el usuario tenga


const usuario3 = {
    id:1,
    info: {
        username:"irene",
        redes: ["twitter","github","linkedin"],
        edad : 77
    }
}


const {info:{username,redes:[r1,...r2] }}=usuario3;

// r1= twitter
//r2= github , linkeding



//obtener el nombre y la edad del siguiente objeto de javascript , si no existe edad que guarde el valor 0


const data4 = {
    id: 101,
    usuario: { // Clave 'usuario', el valor es otro objeto {}
        perfil: { // Clave 'perfil', el valor es otro objeto {}
            nombre2: "lucia",
            edad: 28,
            direccion: { // Clave 'direccion', el valor es otro objeto {}
                ciudad: "granda",
                pais: "España",
            },
        }, // Cierre del objeto 'perfil'
    }, // Cierre del objeto 'usuario'
};

//{const {usuario:{perfil:nombre2,edad=0}}}=data4;



//crear una funcion que extraiga los datos del objeto y me devuelca la siguiente estructuctura

//nombre,fabricante {nombre,contacto},especificaciones(solo la ram)
//imaginemos un array de productos
//usando la nueva especificacion obtener el nombre del producto con mas ram



const productos = [
    // 1. Laptop (Igual al ejemplo anterior)
    {
        id: 4578,
        nombre: "Laptop Profesional X10",
        precio: 1250.99,
        fabricante: {
            nombre:sofia,
            pais: "China",
            contacto: {
                email: "soporte@techcorp.com",
                telefono: "+86 555 123 4567"
            }
        },
        especificaciones: {
            ram: "32 GB DDR4",
            cpu: "Intel Core i7 (13th Gen)"
        }
    },

    // 2. Smartphone
    {
        id: 1205,
        nombre: "Smartphone Ultra 9",
        precio: 899.00,
        fabricante: {
            nombre:Maria,
            pais: "Corea del Sur",
            contacto: {
                email: "atencion@globalmobile.net",
                telefono: "+82 234 567 8900"
            }
        },
        especificaciones: {
            ram: "8 GB LPDDR5",
            cpu: "Snapdragon 8 Gen 2"
        }
    },

    // 3. Monitor
    {
        id: 7311,
        nombre: "Monitor Gaming 27p 144Hz",
        precio: 349.50,
        fabricante: {
            nombre:Jose,
            pais: "Taiwán",
            contacto: {
                email: "support@displaypro.com",
                telefono: "+886 987 654 321"
            }
        },
        especificaciones: {
            ram: "N/A", // No aplica a monitores
            cpu: "Controlador de imagen dedicado"
        }
    },

    // 4. Disco Duro SSD
    {
        id: 9002,
        nombre: "SSD NVMe 2TB Gen4",
        precio: 155.75,
        fabricante: {
            nombre:Julio,
            pais: "Estados Unidos",
            contacto: {
                email: "sales@datastore.biz",
                telefono: "+1 800 555 9002"
            }
        },
        especificaciones: {
            ram: "1 GB Cache",
            cpu: "Phison E18" // Nombre del controlador/CPU
        }
    },
];

const extraerData = (products) => {
    const {
        nombre,
        fabricante:{
            nombre:nombreFabricante,
            contacto
        } ,
        especificaciones:{ ram }  //poner espacios delante y detras de la variable para que se entienda que es por destructuring
    
    } = products;

    return{
        nombre:nombre,       //podiramos quitar los valores porque lo entendera que lo que buscamos es nombre
        fabricante:fabricante,
        especificaciones:especificaciones


    }
};



const newDataArray = (arrayProducts) => arrayProducts
.map((product)=> extraerData(product))
