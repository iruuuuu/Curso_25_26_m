import { createEjercicioHotel } from "./helpers/hotel.js";
import { getHoteles } from "./helpers/hotel.js";
export default function createApp() {
    const appDiv = document.getElementById("app");
    appDiv.appendChild(createEjercicioHotel().render());
    

//   return (
//     <div>app</div>
//   )
}

