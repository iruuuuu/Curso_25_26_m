
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


export const maxRam =(arrayProducts) => {
    arrayProducts.map((extraerData).reduce((max,actual)) => {


    },0)
}