//Crear un sistema de categorias:

//[x] crear una variable llamada catalago que contenga dentro un set de productos
//creaer las siguientes funciones
//[x] agregar producto (true si ha sido agregado el producto false sino)
//mostrarCatalogo que me muestre todo el catalogo


//adicionalmente crear una funcion llamada buscar Producto que le pase un string con el nombre del producto y me devuelva true si lo encuentra y false si no lo encuentra

//cuidado con el get que a veces deb//uelce undefined

const catalogo = new Map<string,Set<string>>();


function addProduct(category:string,product:string):boolean{
    if(!catalogo.has(category)){
        catalogo.set(category,new Set<string>());
    }
    catalogo.get(category)?.add(product);
    return true;
}


addProduct("ropa","pantalon")
addProduct("ropa","camisa")
addProduct("deporte","balon")
addProduct("deporte","zapatillas teneis")
addProduct("ropa","vestido")


console.log(catalogo);


const showCatalog = () => {
    for (const [category, products] of catalogo) {
        console.log('Caterogry:${category} --Numero de productos: ${products.size} ');
        for (const product of products) {
            console.log('-  ${producto}');
        }
    }
}


console.log(showCatalog());


function searchProducto(nameproduct:string):void{
    const categoriasEncontradas: string [] = [];

    for (const [category, products] of catalogo) {
        if (products.has(nameproduct)){
            categoriasEncontradas.push(category);
        }
        }
    return categoriasEncontradas;
}




