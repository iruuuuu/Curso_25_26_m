// authServices.js

import { getUsuarios } from "../helpers/storage"; // <-- CORRECTED IMPORT
import bcrypting from "bcryptjs"; // Use this name consistently

/**
 * Valida las credenciales del usuario contra los datos almacenados.
 * @param {string} username - Nombre de usuario ingresado (plaintext).
 * @param {string} password - Contraseña ingresada (plaintext).
 * @returns {boolean} - True si las credenciales son válidas, false en caso contrario.
 */
export default function validarCredenciales(username, password) {
    // 1. TRIM and Initial Validation (More readable conditions)
    const trimmedUsername = username ? username.trim() : '';
    const trimmedPassword = password ? password.trim() : '';
    
    // Check if fields are empty OR password is too short (> 8)
    if (!trimmedUsername || !trimmedPassword || trimmedPassword.length <= 8) {
        return false;
    }

    // 2. Find the User
    const users = getUsuarios();
    const user = users.find(u => u.username === trimmedUsername);

    // If user is not found, fail early
    if (!user) {
        return false;
    }
    
    // 3. Compare Password Hash (The core of security)
    // bcrypting.compareSync needs (plaintext_password, stored_hash)
    // This returns TRUE only if the plaintext password matches the hash.
    const passwordMatches = bcrypting.compareSync(trimmedPassword, user.passwordhash);

    // 4. Return result
    return passwordMatches;
}