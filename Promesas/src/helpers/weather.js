//crear una funcion que se le pase como parametro una cidad y automaticamente 
// devuelva temperatura y la humedad  y el vientode ese instante

//con promesas y con async await si se tarda mas de 2 segundos en hacer una peticion que se pare la operacion y diga que la web esta inoperativa

const VITE_API_TiempoWeather = import.meta.env.VITE_API_TiempoWeather;

export function getWeatherPromise(city="") {
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${TiempoWeather_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Data obtenida de ${city}`) //este image => image.url es un callback de manera que nos muestra solo la url
            console.log(data);
        })
        .catch((error)=> console.log("Error....",error))
        .finally(message =>console.log("Cerrando JSONPromise"))
    });
}

export const getWeatherPromise = (city="") => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${TiempoWeather_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Data obtenida de ${city}`) //este image => image.url es un callback de manera que nos muestra solo la url
            console.log(data);
        })
        .catch((error)=> console.log("Error....",error))
        .finally(message =>console.log("Cerrando JSONPromise"))
    });
}