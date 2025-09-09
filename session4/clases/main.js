// EJERCICIO PRÁCTICO: RED SOCIAL
// Aplicando conceptos de funciones, scope, closures y buenas prácticas

// ========================================
// 1. GESTIÓN DE DATOS (usando closures)
// ========================================

// Closure para gestionar el estado de la aplicació
const crearRedSocial = () => {
        let posts = [];
        let usuarios = ['Ana', 'Carlos, Maria']
        let contadorPost = 0

        return {
            crearPost: (contenido, autor) => {
                if (!contenido || !autor) {
                    console.error('El contenido y ell autor son necesarios')
                    return null
                }

                const nuevoPost = {
                    id: ++contadorPost,
                    contenido,
                    autor, 
                    likes: 0,
                    comentarios: [],
                    compartidos: 0,
                    fecha: new Date().toLocaleString()
                }

                posts.unshift(nuevoPost)
                return nuevoPost
            }
        }
} 

const redSocial = crearRedSocial()

// Funcion para crear elemento de PUBLICACION
const crearElementoPost = (post) => {
    return 
    `
        <article class="post" data-id="${post.id}">
                        <header class="post-header">
                            <div class="autor-info">
                                <div class="avatar">😈</div>
                                <div>
                                    <h3>${post.autor}</h3>
                                    <small>${post.fecha}</small>
                                </div>
                            </div>
                            <button 
                                onClick="eliminarPost(${post.id})"
                                class="btn-eliminar" 
                                title="Eliminar publicación">
                                🗑️
                            </button>
                        </header>

                        <div class="post-contenido">
                            <p>
                                ${post.contenido}
                            </p>
                        </div>

                        <div class="post-stats">
                            <span>💖 ${post.likes} likes</span>
                            <span>🔗 ${post.compartidos} compartidos</span>
                            <span>📑 ${post.comentarios.length} comentarios</span>
                        </div>

                        <div class="post-acciones">
                            <button 
                                class="btn-accion"
                                onClick="aplicarLike(${post.id})"
                            >
                                💖 Me gusta
                            </button>
                            <button 
                                class="btn-accion"
                                onClick="compartirPost(${post.id})"
                            >
                                🔗 Compartir
                            </button>
                            <button 
                                class="btn-accion"
                                onClick="toggleComentarios(${post.id})"
                            >
                                📑 Comentar
                            </button>
                        </div>

                        <div class="comentarios" id="comentarios-${post.id}" style="display: none;">
                            <div class="lista-comentarios">
                                ${post.comentarios.map(c => 
                                    <div class="comentario">
                                        <strong>
                                            ${c.autor}:
                                        </strong>
                                        ${c.comentario}
                                        <small>${c.fecha}</small>
                                    </div>
                                )}
                            </div>

                            <div class="agregar-comentario">
                                <select id="autor-comentario-${post.id}">
                                <option value="valor">valor del comentario</option>
                                </select>
                                <input id="comentario" placeholder="Escribe tu comentario...">
                                <button>Agregar comentario</button>
                            </div>
                        </div>
                    </article>
    
    `
}

// ========================================
// 4. FUNCIONES DE EVENTOS
// ========================================

// Función para crear nuevo post
const crearNuevoPost = () => {
    const contenido = document.getElementById('nuevo-post').value
    const autor = document.getElementById('autor-post').value

    if (contenido.trim()) {
        const post = crearRedSocial.crearPost(contenido.trim(), autor)
        if (post) {
            document.getElementById('nuevo-post').value = ''
            mostrarNotificacion(`Post creado por ${autor}`)
        }
    } else {
        mostrarNotificacion('El contenido no puede estar vacío')
    }
}

