import { initialStorage } from "./helpers/storage";
import { DB } from "./db/db";
import { renderLoginForm } from "./view/loginView";
// Assuming you will create this function in ./services/authServices.js
import  validarCredenciales  from "./services/authServices"; 

export function initialApp() {
    // 1. Initialize Storage
    initialStorage(DB); 

    // 2. Render Form
    const app = document.getElementById("app");
    if (!app) {
        console.error("Error: Element with ID 'app' not found in HTML.");
        return; // Stop execution if the container isn't found
    }
    app.innerHTML = renderLoginForm();
    
    // 3. Select Form and Message Element (CORRECTED SELECTORS)
    const form = document.querySelector("#loginForm"); // Should be an ID selector
    const message = document.querySelector("#message"); // Assuming your view has a #message element

    if (!form || !message) {
        console.error("Error: loginForm or message element not found.");
        return;
    }

    // 4. Attach Event Listener
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // CORRECTED: Get form data efficiently
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");

        // 5. Validate Credentials (Function assumed to be imported)
        // Ensure validarCredenciales returns true or false
        const ok = validarCredenciales(username, password); 

        // 6. Display Message and Reset Form (CORRECTED CASE and STYLE)
        message.innerHTML = ok 
            ? `<span style="color: green;">¡Bienvenido ${username}!</span>`
            : `<span style="color: red;">Credenciales incorrectas o incompletas.</span>`;
            
        form.reset();
    });
}