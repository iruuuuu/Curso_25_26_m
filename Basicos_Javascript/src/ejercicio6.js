/**
 * Ejercicio
 * Generar un objeto resumen de mi array que tenga los siguientes campos
    {
    valor: numero_correspondiente,
    posicion: posicion_dentro_del_array,
    esUltimo: array_que_me_diga:si_es_el_ultimo (true/false)
    }
*/


const numeros = [1, 2, 3, 4, 5];


const resumenNumeros = numeros.map( (numero,indice,miArray)=> {
    return {
        valor : numero,
        posicion: indice,
        esUltimio:indice === miArray.length -1
    };
})

console.log(resumenNumeros);

/**
 * Ejercicio
 * Mapeado  que tenga nombre , precioOriginal , precioConIva, hayStock
*/

const products = [
    {
        name: "Laptop",price:1000, stock:5,active:true
    },
    {
        name: "Mouse Logitech", price:28.50 , stock:0, active:false
    }
]



const productsConIva = products.map ((product,price,stock,active)=>{
    return {
        original : product.price,
        precioConIva : product.price*1.21,
        avaiable: product.stock>0,
    }
})

console.log


/**Filtrame los productos que tienen stock y estan activos */


const productsWhitStock= products.filter (product => product.stock>0 && productsConIva.active);



/*Buscar todos los datos de los laptos de tipo insensitive (le de igual que este en uppercase o lowercase)*/

/**
 * 
 * @param {*} products 
 * @param {*} wordToFind 
 * @returns 
 */
const findProducts= (products,wordToFind)=>products
    .filter((product)=>productos.name.toLowerCase()
        .includes(wordToFind.toLowerCase),
    )


//mi metodo
const buscarLaptop = product.filter(product=> product.name.toLowerCase()||product.name.toUpperCase().includes("laptop"));



//crear una funcion que le pase como parametro un array de productos , precio_inical , precio_final y me devuelva los productos cuyo precio esta en ese rango de valores ( sin incluirlos)
//la funcion se llamara filterPrice


const filterPrice= (products)=>products.filter((product)=products.price)

//modificar FindProductos para que ademas me muestre solo los que estan activados


//Calcular el total del carrito con iva ; funcion totalCarrito
const carrito = [
    {
        name: "Laptop",price:1000, count:5, category:"Electronica",
    },
    {
        name: "Mouse Logitech", price:28.50 , count:1, category:"Electronica",
    },
        {
        name: "Polo Scalper", price:28.50 , count:10, category:"Ropa",
    },
    {
        name: "Pantalon Stradivarius", price:45, count:5, category:"Ropa",
    }
]

/**
 * @author: Irene Ming Jimenez Hinojosa
 * @param {Object[]} cart  - Carrito de objetos
 * @param {Number} cavat (iva) -Iva a aplicar
 * @returns ¨{Number} - Total del carrito IVA incluido
 */
const totalCart = (cart = [], vat=1.21)=>{
    return cart.reduce ((total,product)=>{
        return total+product.price;     //se guarda en total
    },0)
}


//DEVUELVE UN NUMERO 

const totalCartwithIva = (cart = [], vat=1.21)=>cart
    .reduce((total,product)=> product.count>5
    ? ((total + producto .price*vat) * (100 - 5 )) /100 
    : total + producto.price*vat
    ,0);



/*
    Agrupar el carrito por categorias    
*/

/*
        {
    Electronica:[
    {
    },
    {
    }
    ],
    Ropa:[
    {

    },

    ],
        }
*/

const productsCategory = (carrito=[]) => carrito
    .reduce((group, product)=>{
        const categoryFilter= product.category;
        if (!groups[categoryFilter]){        //toma de decision ; sino existe la cate
            groups[categoryFilter]= [];   //creo el objeto ; inicialmente vacia
        }
        groups[categoryFilter].push(product)  
        return groups
    },{})




/*
Array de votos , crear una funcion que me cuente cuantos votos tiene cada uno de los usuarios
*/


const votos = [ "ana","jose","maria","paco","ana","ana"];

const contadorVotos = (contador=[]) => voto
    .reduce((acc, voto)=>{
    acc[voto] = (acc[voto] || 0) + 1;  
        return acc
    },{})




    /*
    Buscar el ususario cuyo id=2 y obtener el rol que tiene  

    funcion (arrayUsuarios,idBusqueda) --> devuelve el rol que tiene
     */

//CREAR ARRAY CON ID, NOMBRE Y ROL CON 3 USUARIOS


    const findUsers = (user=[],id=1)=> {
        return user.find((user)=> {
            if (encontrado = Number(user.id)=== Number(id)){
                return user.rol;
            }else{
                return `Error, usuario con id = ${id} no encontrado `
            }
        })
    }



    //Buscar el indice del array donde se enccuentra el usuario con id buscado+

    const findUsersIndex = (users = [], id=1) => {
        return users.findIndex((user)=>Number(user.id)===Number(id));
    }


    //devuelve -1 si findIndex devuelve error o no encuentra la accion requerida


//some() -->devuelve true si al menos un elemento cumple la condicioin 
    //devuelve true si almenos 1 elemento cumple la condicion



    const numeroPares =[4,5,6,64]  //¿hay numeros pares en este harray

const hayPares = numerosPares.some (numero => numero%2===0) // devuelve true o false si hay algun numero par 



    function paresCuadrados (numeroPares){
    return numeroPares.map (numeroPares
        .filter ( (numero) => numero % 2 == 0 )
        .map ( (numero) => numero ** 2 ) );
}
