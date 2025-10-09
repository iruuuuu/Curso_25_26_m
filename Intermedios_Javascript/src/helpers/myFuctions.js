
/**
 * 
 * @param {Object} products  - objeto data 
 * @returns {Object} - Object Products -Objeto con informacion extraida
 */


export const extraerData = (products) => {
    const {
        nombre,
        fabricante:{
            nombre:nombreFabricante,
            contacto
        } ,
        especificaciones:{ ram }  //poner espacios delante y detras de la variable para que se entienda que es por destructuring
    
    } = products;

    console.log(nombreFabricante)

    return{
        nombre,    //podiramos quitar los valores porque lo entendera que lo que buscamos es nombre
        nombreFabricante,
        contacto,
        ram,
        };
};


//crear una funcion maxRam que le pase un array de productos y me devuelva el nombre del producto que tiene la maxima ram

const maxRam = (productos) => {
    // Manejo de caso límite
    if (!Array.isArray(productos) || productos.length === 0) {
        return "No hay productos para evaluar.";
    }

    // El método reduce() itera sobre el array y acumula un único valor (en este caso, el objeto del producto con la RAM más alta).
    const productoMaxRam = productos.reduce((productoMayor, productoActual) => {
        // Compara la RAM del acumulador (productoMayor) con la RAM del elemento actual.
        // Devuelve el producto con el valor de RAM más grande para la próxima iteración.
        return (productoActual.ram > productoMayor.ram) ? productoActual : productoMayor;
    });

    // Una vez que el reduce termina, 'productoMaxRam' es el objeto completo con la RAM más alta.
    return productoMaxRam.nombre;
};