const galeria = document.getElementById('galeria')
const btnCargar = document.getElementById('cargarMas')

let pagina = 1

const BASE_URL = "https://picsum.photos/"

async function cargarPosters() {
    try {
        const respuesta = await fetch(`${BASE_URL}v2/list?page=${pagina}&limit=9`)
        const posters = await respuesta.json()
        
        posters.forEach(poster => {
            const div = document.createElement("div")
            div.classList.add("poster")

            div.innerHTML = `
                <a href="${poster.download_url}" target="_blank">
                    <img src="${BASE_URL}id/${poster.id}/400/300?grayscale=true" 
                        alt="Poster by ${poster.author}"
                    />
                    <div class=autor>${poster.author}</div>
                </a>
            `

            galeria.appendChild(div)
        });
    } catch (error) {
        console.error("Error cargando posters: ", error)
    }
}


btnCargar.addEventListener("click", () => {
    pagina++
    cargarPosters()
})

// Inicializar peticion
cargarPosters()
