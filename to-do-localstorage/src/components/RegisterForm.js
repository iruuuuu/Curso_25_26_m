// Componente del formulario de registro
import { registerUser } from '../auth/auth.js';

export const createRegisterForm = () => {
    return `
        <h1>Registro de Usuario</h1>
        <form id="form-registro">
            <div class="form-group">
                <label for="nombre-registro">Usuario:</label>
                <input type="text" id="nombre-registro" required minlength="3">
            </div>
            <div class="form-group">
                <label for="contraseña-registro">Contraseña:</label>
                <input type="password" id="contraseña-registro" required minlength="4">
            </div>
            <div class="form-group">
                <label for="confirmar-contraseña">Confirmar Contraseña:</label>
                <input type="password" id="confirmar-contraseña" required>
            </div>
            <button type="submit">Registrarse</button>
        </form>
        <div id="mensaje-registro" class="message"></div>
        <p>¿Ya tienes cuenta? <span class="link" onclick="mostrarLogin()">Inicia sesión aquí</span></p>
    `;
};

export const setupRegisterForm = (onSuccess) => {
    const form = document.getElementById('form-registro');
    const mensaje = document.getElementById('mensaje-registro');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre-registro').value;
            const contraseña = document.getElementById('contraseña-registro').value;
            const confirmarContraseña = document.getElementById('confirmar-contraseña').value;
            
            // Validar contraseñas
            if (contraseña !== confirmarContraseña) {
                mensaje.textContent = 'Las contraseñas no coinciden';
                mensaje.className = 'message error';
                return;
            }
            
            // Validar longitud
            if (nombre.length < 3) {
                mensaje.textContent = 'El usuario debe tener al menos 3 caracteres';
                mensaje.className = 'message error';
                return;
            }
            
            if (contraseña.length < 4) {
                mensaje.textContent = 'La contraseña debe tener al menos 4 caracteres';
                mensaje.className = 'message error';
                return;
            }
            
            const resultado = registerUser(nombre, contraseña);
            mensaje.textContent = resultado.message;
            mensaje.className = 'message ' + (resultado.success ? 'success' : 'error');
            
            if (resultado.success && onSuccess) {
                setTimeout(onSuccess, 1500);
            }
        });
    }
};
