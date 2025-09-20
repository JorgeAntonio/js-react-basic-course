// constantes

// variables
let posts = []
let id = 0
const usuarios = ['Ana', 'Carlos', 'Maria', 'Pedro', 'Lucia']

// utilidades
function notificar(mensaje) {
    const n = document.getElementById('notificacion')
    n.textContent = mensaje
    n.style.display = 'block'
    setTimeout(() => n.style.display = 'none', 2500)
}

// funcion crear post
function crearPost() {
    const autor = document.getElementById('autor').value
    const contenido = document.getElementById('contenido').value.trim()

    if (!contenido) return notificar("El post no puede estar vacio")

    posts.unshift({
        id: ++id,
        autor,
        contenido,
        likes: 0,
        compartidos:0,
        comentarios: []
    })

    document.getElementById('contenido').value = ''
    notificar('Post creado existosamente')
    render()
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId)
    post.likes++
    notificar(`${post.autor} le dio me gusta al post`)
    render()
}

function compartirPost(postId) {
    const post = posts.find(p => p.id === postId)
    post.compartidos++
    notificar(`${post.autor} ha compartido el post`)
    render()
}

function comentarPost(postId) {
    const comentarioInput = document.getElementById(`comentario-${postId}`);
    const autorSelect = document.getElementById(`autor-comentario-${postId}`);
    const texto = comentarioInput.value.trim();
    const autor = autorSelect.value;

    if (!texto) return notificar("❌ El comentario no puede estar vacío");

    const post = posts.find(p => p.id === postId);
    post.comentarios.push({ autor, texto });
    comentarioInput.value = '';
    notificar(`💬 Comentario agregado por ${autor}`);
    render();
}

function render() {
    const contenedor = document.getElementById('posts')
    contenedor.innerHTML = posts.map(post => `
        <div class="post">
            <p><b>${post.autor}</b>: ${post.contenido}</p>
            <div class="acciones">
                <button onclick="likePost(${post.id})">Likes ${post.likes}</button>
                <button onclick="compartirPost(${post.id})">Compartidos ${post.compartidos}</button>
            </div>
            <div class="comentarios">
            ${post.comentarios.map(c => `<p><b>${c.autor}:</b> ${c.texto}</p>`).join('')}
            <select id="autor-comentario-${post.id}">
              ${usuarios.map(u => `<option>${u}</option>`).join('')}
            </select>
            <input type="text" id="comentario-${post.id}" placeholder="Escribe un comentario...">
            <button onclick="comentarPost(${post.id})">Enviar</button>
          </div>
        </div>
        `).join('')
}



