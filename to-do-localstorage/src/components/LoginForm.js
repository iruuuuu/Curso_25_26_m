// Componente del formulario de login
import { loginUser } from '../auth/auth.js';

export const createLoginForm = () => {
    return `
        <h1>Iniciar Sesión</h1>
        <form id="form-login">
            <div class="form-group">
                <label for="nombre-login">Usuario:</label>
                <input type="text" id="nombre-login" required>
            </div>
            <div class="form-group">
                <label for="contraseña-login">Contraseña:</label>
                <input type="password" id="contraseña-login" required>
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
        <div id="mensaje-login" class="message"></div>
        <p>¿No tienes cuenta? <span class="link" onclick="mostrarRegistro()">Regístrate aquí</span></p>
    `;
};

export const setupLoginForm = (onSuccess) => {
    const form = document.getElementById('form-login');
    const mensaje = document.getElementById('mensaje-login');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre-login').value;
            const contraseña = document.getElementById('contraseña-login').value;
            
            const resultado = loginUser(nombre, contraseña);
            
            mensaje.textContent = resultado.message;
            mensaje.className = 'message ' + (resultado.success ? 'success' : 'error');
            
            if (resultado.success && onSuccess) {
                setTimeout(onSuccess, 1500);
            }
        });
    }
};
