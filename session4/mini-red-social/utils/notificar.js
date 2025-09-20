export const notificar = (mensaje) => {
    const n = document.getElementById('notificacion')
    n.textContent = mensaje
    n.style.display = 'block'
    setTimeout(() => n.style.display = 'none', 2500)
}