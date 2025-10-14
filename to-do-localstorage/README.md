# Lista de Tareas Simple

Una aplicación web simple para gestionar tareas con sistema de login básico.

## ¿Qué hace esta aplicación?

1. **Registro de usuarios**: Puedes crear una cuenta con nombre de usuario y contraseña
2. **Login**: Puedes iniciar sesión con tu cuenta
3. **Lista de tareas**: Puedes agregar, completar y eliminar tareas
4. **Persistencia**: Todo se guarda en el navegador (localStorage)

## ¿Cómo usar?

1. Abre `index.html` en tu navegador
2. Regístrate con un nuevo usuario
3. Inicia sesión
4. Agrega tus tareas
5. Marca como completadas o elimina las que ya no necesites

## Estructura del proyecto

```
proyecto/
├── index.html                 # Página principal
├── src/
│   ├── main.js               # Archivo principal de la aplicación
│   ├── styles/
│   │   └── styles.css        # Estilos CSS
│   ├── auth/
│   │   └── auth.js           # Sistema de autenticación
│   ├── components/
│   │   ├── LoginForm.js      # Componente de login
│   │   └── RegisterForm.js   # Componente de registro
│   ├── helpers/
│   │   └── tareas.js         # Funciones para manejar tareas
│   └── db/
│       └── db.js             # Datos iniciales
└── README.md                 # Este archivo de explicación
```

## Conceptos de JavaScript que aprenderás

- **Variables**: `let`, `const`
- **Funciones**: `function nombreFuncion() {}`
- **Arrays**: `[]` para listas
- **Objetos**: `{}` para datos estructurados
- **localStorage**: Para guardar datos en el navegador
- **DOM**: Para cambiar el contenido de la página
- **Eventos**: Para responder a clics y formularios

## ¿Cómo funciona?

1. **Al cargar la página**: Se ejecuta `iniciarApp()`
2. **Se cargan los datos**: Usuarios y tareas del localStorage
3. **Se verifica el login**: Si hay usuario logueado, muestra la app principal
4. **Si no hay login**: Muestra el formulario de login
5. **Los formularios**: Tienen eventos que ejecutan funciones cuando se envían
6. **Las tareas**: Se guardan en un array y se muestran en la pantalla


