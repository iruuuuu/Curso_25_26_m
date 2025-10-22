// Aplicación principal simplificada
import { dbTareas } from './db/db.js';
import { isAuthenticated, getCurrentUser, logoutUser } from './auth/auth.js';
import { createLoginForm, setupLoginForm } from './components/LoginForm.js';
import { createRegisterForm, setupRegisterForm } from './components/RegisterForm.js';
import { getTareas, saveTareas, addTarea, deleteTarea, toggleTarea, rellenarLocalStorage } from './helpers/tareas.js';

// ========================================
// FUNCIONES PARA TAREAS
// ========================================

// Mostrar tareas en la pantalla
function renderTareas() {
    const listaTareas = document.getElementById('lista-tareas');
    if (!listaTareas) return;
    
    const tareas = getTareas();
    listaTareas.innerHTML = tareas.map(tarea => `
        <div class="todo-item${tarea.completada ? ' completed' : ''}">
            <div>${tarea.nombre}</div>
            <div class="todo-actions">
                <button data-action="toggle" data-id="${tarea.id}">
                    ${tarea.completada ? 'Deshacer' : 'Completar'}
                </button>
                <button data-action="delete" data-id="${tarea.id}">Eliminar</button>
            </div>
        </div>
    `).join('');
}

// Agregar nueva tarea
function agregarTareaUI(texto) {
    addTarea(texto);
    renderTareas();
}

// Eliminar tarea
function eliminarTareaUI(id) {
    deleteTarea(id);
    renderTareas();
}

// Toggle tarea
function toggleTareaUI(id) {
    toggleTarea(id);
    renderTareas();
}

// Manejador de eventos para las acciones de las tareas
function handleTareasActions(e) {
    const action = e.target.dataset.action;
    const id = Number(e.target.dataset.id);

    if (!action || !id) return;

    if (action === 'toggle') {
        toggleTareaUI(id);
    } else if (action === 'delete') {
        eliminarTareaUI(id);
    }
}

// Manejador de eventos para acciones globales de la app (navegación, logout)
function handleAppActions(e) {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    if (action === 'show-login') {
        mostrarLogin();
    } else if (action === 'show-register') {
        mostrarRegistro();
    } else if (action === 'logout') {
        cerrarSesion();
    }
}

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

// Mostrar aplicación principal
function mostrarAppPrincipal() {
    const currentUser = getCurrentUser();
    
    document.getElementById('app').innerHTML = `
        <div class="user-info">
            <span>Bienvenido, ${currentUser.username}</span>
            <button class="logout-btn" data-action="logout">Cerrar Sesión</button>
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
            agregarTareaUI(texto);
            input.value = '';
        }
    });
    
    // Configurar delegación de eventos para la lista de tareas
    document.getElementById('lista-tareas').addEventListener('click', handleTareasActions);

    // Mostrar tareas
    renderTareas();
}

// Cerrar sesión
function cerrarSesion() {
    logoutUser();
    mostrarLogin();
}

// ========================================
// INICIALIZAR APLICACIÓN
// ========================================

function iniciarApp() {
    console.log('Iniciando aplicación...');
    // Rellenar localStorage con datos iniciales si no hay nada
    if (getTareas().length === 0) {
        rellenarLocalStorage(dbTareas);
    }
    
    // Verificar si hay usuario logueado
    if (isAuthenticated()) {
        console.log('Usuario logueado:', getCurrentUser().username);
        mostrarAppPrincipal();
    } else {
        console.log('No hay usuario logueado, mostrando login');
        mostrarLogin();
    }

    // Configurar el manejador de eventos principal de la app
    document.getElementById('app').addEventListener('click', handleAppActions);
}

// Iniciar cuando la página esté lista
document.addEventListener('DOMContentLoaded', iniciarApp);