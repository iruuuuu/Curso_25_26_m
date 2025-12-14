import { booking } from "./helpers/booking.js";
export default function createApp() {
    const appDiv = document.getElementById("app");
    appDiv.appendChild(booking().render());
    
    


//   return (
//     <div>app</div>
//   )
}

