//Ejercicio:Destructuring profundo

import { productos } from "./DATA/data"
import { extraerData } from "./helpers/myFuctions"




//--------------INICIO DE LA APLICACION-------------

const newDataArray = (arrayProducts) => arrayProducts
.map((product)=> extraerData(product));


newDataArray(productos)
