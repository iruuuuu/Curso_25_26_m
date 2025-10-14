// Sistema de autenticación simplificado

// Claves para localStorage
const CLAVE_USUARIOS = 'usuarios';
const CLAVE_USUARIO_ACTUAL = 'usuarioActual';

// Obtener usuarios del localStorage
export const getUsers = () => {
    const usuarios = localStorage.getItem(CLAVE_USUARIOS);
    return usuarios ? JSON.parse(usuarios) : [];
};

// Guardar usuarios en localStorage
export const saveUsers = (usuarios) => {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
};

// Registrar nuevo usuario
export const registerUser = (username, password) => {
    const usuarios = getUsers();
    
    // Verificar si el usuario ya existe
    if (usuarios.find(u => u.username === username)) {
        return { success: false, message: 'El usuario ya existe' };
    }
    
    // Crear nuevo usuario
    const newUser = {
        id: Date.now(),
        username: username,
        password: password, // En un proyecto real, aquí se encriptaría
        createdAt: new Date().toISOString()
    };
    
    usuarios.push(newUser);
    saveUsers(usuarios);
    
    return { success: true, message: 'Usuario registrado correctamente' };
};

// Iniciar sesión
export const loginUser = (username, password) => {
    const usuarios = getUsers();
    const user = usuarios.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem(CLAVE_USUARIO_ACTUAL, JSON.stringify({
            id: user.id,
            username: user.username,
            loginTime: new Date().toISOString()
        }));
        return { success: true, message: 'Login correcto', user: user };
    }
    
    return { success: false, message: 'Usuario o contraseña incorrectos' };
};

// Cerrar sesión
export const logoutUser = () => {
    localStorage.removeItem(CLAVE_USUARIO_ACTUAL);
};

// Verificar si hay una sesión activa
export const getCurrentUser = () => {
    const currentUser = localStorage.getItem(CLAVE_USUARIO_ACTUAL);
    return currentUser ? JSON.parse(currentUser) : null;
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
    return getCurrentUser() !== null;
};
