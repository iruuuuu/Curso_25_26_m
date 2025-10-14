export function renderLoginForm(){
    return `
    <form id="loginForm">
    <label>Username</label>
    <input type="text" id="username" name="username" required></label>
    <label>Password</label>
    <input type="password" id="password" name="password" required></label>
    <button type="submit">Iniciar Sesion</button>
</form>;
<p id="message"></p>;`
}


