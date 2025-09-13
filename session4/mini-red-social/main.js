// Variables globales

let posts = []
let id = 0
const usuarios = ['Ana', 'Carlos', 'Maria', 'Pedro', 'Lucia']

function notificar(mensaje) {
    const n = document.getElementById('notificacion')
    n.textContent = mensaje
    n.style.display = 'block'
    setTimeout(() => n.style.display = 'none', 2500)
}