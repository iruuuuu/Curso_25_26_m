// helpers/storage.js

import { ENV } from "../config/env";

/**
 * Inicializa el localStorage guardando el array de usuarios.
 * SOLO se ejecuta si la clave de almacenamiento (VITE_STORAGE_KEY)
 * NO existe aún en el localStorage.
 *
 * @param {Array<Object>} arrayUsers - El array de objetos de usuario a guardar.
 * @returns {void}
 */
export function initialStorage(arrayUsers) {
    if (!localStorage.hasOwnProperty(ENV.VITE_STORAGE_KEY)) {
        // Convierte el array de JavaScript a una cadena JSON para guardarlo.
        localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
        console.info(`${ENV.VITE_APP_TITLE}: ¡Usuarios guardados correctamente en localStorage!`);
    }
}

// -----------------------------------------------------------------------------

/**
 * Recupera el array de usuarios guardado en el localStorage.
 *
 * @returns {Array<Object>} El array de usuarios o un array vacío ([]) si no hay datos.
 */
export function getUsuarios() {
    // Obtiene la cadena JSON del localStorage.
    const usersJSON = localStorage.getItem(ENV.VITE_STORAGE_KEY);
    
    // Parsea la cadena JSON de vuelta a un array de JavaScript.
    // El '|| []' asegura que si no hay nada guardado (null), se devuelva un array vacío.
    return JSON.parse(usersJSON) || [];
}

// -----------------------------------------------------------------------------

/**
 * Añade un nuevo usuario al array existente de usuarios en el localStorage 
 * y actualiza la lista completa.
 *
 * @param {Object} user - El objeto de usuario a añadir (debe tener id, username, passwordHash, rol, etc.).
 * @returns {void}
 */
export function setUsuarios(user) {
    // 1. Obtiene la lista actual de usuarios.
    const users = getUsuarios();
    
    // 2. Añade el nuevo usuario a la lista.
    users.push(user);
    
    // 3. Sobrescribe (actualiza) la lista completa en localStorage.
    // NOTA: Usamos setItem directamente para ACTUALIZAR, no initialStorage.
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(users));
}