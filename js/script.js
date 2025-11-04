// Variables para capturar los elementos del DOM
const  logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Funcion para mostrar el formulario de registro
registerLink.addEventListener('click', () => {
    // Agregar la clase 'active' al formulario de registro para mostrar el formulario de registro
    logregBox.classList.add('active');
})

// Funcion para mostrar el formulario de login
loginLink.addEventListener('click', () => {
    // Remover la clase 'active' del formulario de registro para mostrar el formulario de login
    logregBox.classList.remove('active')
})