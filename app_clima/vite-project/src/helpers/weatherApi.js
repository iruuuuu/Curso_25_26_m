//crear una funcion getWeatherByCity(cityName){

//    que devuelva una data en json
//}


//crar una funcion llamada parseWeatherData(data){
//    que devuelva:
    //citu, pais, temperatura, humedad, viento , icono , descripcion 
//}

// metrica y el idioma español

export const getWeatherByCity=(cityName)=> {
    const apiKey = 'b9c9b4e7b8b8b8b8b8b8b8b8b8b8b8b8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

//icono y descripcion tiene [0] porque es un array y no un objeto
export const parseWeatherData=(data)=>{
    const ciudad = data.name;
    const pais = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const viento = data.wind.speed;
    const icono = data.weather[0].icon;
    const descripcion = data.weather[0].description;
    return {
        ciudad,
        pais,
        temperatura,
        humedad,
        viento,
        icono,
        descripcion
    };
}