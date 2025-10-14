// Aplicación principal simplificada
import { dbTareas } from './db/db.js';
import { isAuthenticated, getCurrentUser, logoutUser } from './auth/auth.js';
import { createLoginForm, setupLoginForm } from './components/LoginForm.js';
import { createRegisterForm, setupRegisterForm } from './components/RegisterForm.js';
import { getTareas, saveTareas, addTarea, deleteTarea, toggleTarea, rellenarLocalStorage } from './helpers/tareas.js';

// Variables globales
let tareas = [];

// ========================================
// FUNCIONES PARA TAREAS
// ========================================

// Cargar tareas
function cargarTareas() {
    tareas = getTareas();
}

// Mostrar tareas en la pantalla
function mostrarTareas() {
    const listaTareas = document.getElementById('lista-tareas');
    if (!listaTareas) return;
    
    listaTareas.innerHTML = tareas.map(tarea => `
        <div class="todo-item${tarea.completada ? ' completed' : ''}">
            <div>${tarea.nombre}</div>
            <div class="todo-actions">
                <button onclick="toggleTarea(${tarea.id})">
                    ${tarea.completada ? 'Deshacer' : 'Completar'}
                </button>
                <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
            </div>
        </div>
    `).join('');
}

// Agregar nueva tarea
function agregarTarea(texto) {
    const nuevaTarea = addTarea(texto);
    tareas.push(nuevaTarea);
    mostrarTareas();
}

// Eliminar tarea
function eliminarTarea(id) {
    deleteTarea(id);
    cargarTareas();
    mostrarTareas();
}

// Toggle tarea
function toggleTareaLocal(id) {
    toggleTarea(id);
    cargarTareas();
    mostrarTareas();
}

// Hacer funciones globales para onclick
window.toggleTarea = toggleTareaLocal;
window.eliminarTarea = eliminarTarea;

// ========================================
// FUNCIONES PARA MOSTRAR PANTALLAS
// ========================================

// Mostrar pantalla de login
function mostrarLogin() {
    document.getElementById('app').innerHTML = createLoginForm();
    setupLoginForm(mostrarAppPrincipal);
}

// Mostrar pantalla de registro
function mostrarRegistro() {
    document.getElementById('app').innerHTML = createRegisterForm();
    setupRegisterForm(mostrarLogin);
}

// Hacer funciones globales para onclick
window.mostrarLogin = mostrarLogin;
window.mostrarRegistro = mostrarRegistro;

// Mostrar aplicación principal
function mostrarAppPrincipal() {
    const currentUser = getCurrentUser();
    
    document.getElementById('app').innerHTML = `
        <div class="user-info">
            <span>Bienvenido, ${currentUser.username}</span>
            <button class="logout-btn" onclick="cerrarSesion()">Cerrar Sesión</button>
        </div>
        <h1>Lista de Tareas</h1>
        <form id="form-tarea">
            <div class="form-group">
                <input type="text" id="nueva-tarea" placeholder="Escribe una nueva tarea..." required>
            </div>
            <button type="submit">Agregar Tarea</button>
        </form>
        <div id="lista-tareas"></div>
    `;
    
    // Configurar evento del formulario de tareas
    document.getElementById('form-tarea').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const input = document.getElementById('nueva-tarea');
        const texto = input.value.trim();
        
        if (texto) {
            agregarTarea(texto);
            input.value = '';
        }
    });
    
    // Cargar y mostrar tareas
    cargarTareas();
mostrarTareas();
}

// Cerrar sesión
function cerrarSesion() {
    logoutUser();
    mostrarLogin();
}

// Hacer función global
window.cerrarSesion = cerrarSesion;

// ========================================
// INICIALIZAR APLICACIÓN
// ========================================

function iniciarApp() {
    console.log('Iniciando aplicación...');
    
    // Rellenar localStorage con datos iniciales
    rellenarLocalStorage(dbTareas);
    
    // Cargar tareas
    cargarTareas();
    
    // Verificar si hay usuario logueado
    if (isAuthenticated()) {
        console.log('Usuario logueado:', getCurrentUser().username);
        mostrarAppPrincipal();
    } else {
        console.log('No hay usuario logueado, mostrando login');
        mostrarLogin();
    }
}

// Iniciar cuando la página esté lista
document.addEventListener('DOMContentLoaded', iniciarApp);