//Metodos de array

//.at <-- acceso con indices negativos
const frutas = ["manzana", "banana", "pera", "naranja"];
console.log(frutas.at(-1)); //naranja
console.log(frutas.at(-2)); //pera
console.log(frutas.slice(-2)); //pera, naranja


//splice  <-- modificar el array original;muta el array original   --> frutas.splice(1,2) elimina 2 elementos desde la posicion 1
frutas.splice(1,2); //elimina 2 elementos desde la posicion 1
console.log(frutas); //manzana, naranja


frutas.splice(1,0,"kiwi","mango"); //añade 2 elementos desde la posicion 1 sin eliminar nada
console.log(frutas); //manzana, kiwi, mango, naranja




//  ¿Como concateno dos arrays o mas? Con concat   
// ¿Muta el array original cuando contatetamos 2 o mas array? No

frutas.concat([1,2,3,4,5,6]);   //Esta forma no es eficiente

const edades= [1,2,3,4,5,6];

const ArrayConcat = [...frutas,...edades ]; //ESTA ES LA QUE HAY QUE USAR spread Operator (...); quita las llaves

//Set <--- OTRO TIPO DE DATOS  (datos unicos) ; ademas es un constructor
const pesos = [2,4,34,5,45,2,2,324,44,2];

const sinDuplicados = [...new Set(pesos)] //****************************************************









// .reduce      (reduce un array  a un unico valor)

//pesos.reduce((acumulado,elemento,indice,array=> aquiva la logica, valorInicial))

//el acumulador y el elemento no son opcionales
//el resto si son opcionales
//no muta el array

pesos.reduce( (suma,peso)=>     suma +peso   ,  0 )


//Realizar la multiplicacion de todos los numeros de un array

pesos.reduce ( (suma,peso)=> suma*peso , 1);



// encontar el maximo y el minimo 

pesos.reduce( (max ,peso )  => peso> max ? peso :max , pesos[0] )
pesos.reduce( (max ,peso )  => peso> min ? peso :min , pesos[0] )


//dado un array que sea  manzana,platano,naranja,manzana,manzana,platano,pera,pera devolverme un objeto clave valor que me diga nombre de la fruta: cuantas veces aparece esa fruta

const frutas2 =["manzana","platano","naranja","manzana","manzana","platano","pera","pera"]
/*{
    manzana:3,
    platano:2,
    naranja:1,
    pera:2,
    }
 */
frutas2.reduce (  (acc ,fruta )=>  {
    acc[fruta](acc[fruta] || 0) + 1 ;
    return acc;
}  , {})

//dado el sifuiente array bidimentsional , se pide aplanar dicho array  en un array unidimentsional 







//array de objetos

const usuarios = [
    {id:1, name: "Ana",edad:25 },
    {id:2, name: "Juan",edad:2 },
    {id:3, name: "Maria",edad:32 }
];

usuarios.find(usuario=> usuario.nombre.toLowerCase==="juan"),


//dame todos los usuarios cuya edad es >= 28

usuarios.find(usuario => Number(usuarios.edad) > 30)


//------------------------EJERCICIO------------------------

const usuarios2 = [
    {id:1, name: "Ana",edad:25,data :{books:100} },
    {id:2, name: "Juan",edad:2, data :{books:50}},
    {id:3, name: "Maria",edad:32, data :{books:220} },
    {id:4, name: "Mario",edad:49,data :{books:100} },
    {id:5, name: "Sofia",edad:66, data :{books:50}},
    {id:6, name: "Paula",edad:10, data :{books:220} }
];


//devolver un array con SOLO los nombres de los usuarios que tieen en su biblioteca mas de 20 libros

usuarios2.filter(usuario2=>Number(usuario.books)>=20)


//Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28 euros 



//Decirme que usuarios no tienen libros

usuarios2.filter(usuario2=>Number(usuarios.data.books)=0)