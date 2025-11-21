//crear una funcion una con promise y otra con async await que permita traerse
//  de jsonplaceholder.typicode.com/photos el title y la imagen

const VITE_API_URL = 'https://jsonplaceholder.typicode.com/photos';



//con promise
export function dataJSONPromise() {
    return new Promise((resolve, reject) => {
        fetch(VITE_API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(`Data obtenida de ${VITE_API_URL}`) //este image => image.url es un callback de manera que nos muestra solo la url
            console.log(data);
        })
        .catch((error)=> console.log("Error....",error))
        .finally(message =>console.log("Cerrando JSONPromise"))
    });
}


//con async await
export async function dataJSONAwait(){
    console.log("---------------dataJSONAsync------------------")
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if(!response.ok)
            throw new Error("No se pudo obtener los datos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error ...",error);
    }
}

//con async await
export const dataJSONAsync =async () => {
    console.log("---------------dataJSONAsync------------------")
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if(!response.ok)
            throw new Error("No se pudo obtener los datos");
        const data = await response.json();
        const dataParseada = data.map((infoFoto)=>{
            return {
                title,
                thumbailUrl,
            };
        });
        console.log("-------------Data Parseada----------")
        console.table(dataParseada);
        return dataParseada;
    } catch (error) {
        console.log("Error ...",error);
    }
}

