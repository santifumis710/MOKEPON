const botonReiniciar = document.getElementById('boton-reiniciar')
const botonHielo = document.getElementById('boton-Hielo')
const botonAgua = document.getElementById('boton-agua')
const botonFuego = document.getElementById('boton-fuego')
const botonfutbolistaJugador = document.getElementById('boton-futbolista')
const sectionReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarFutbolista = document.getElementById('seleccionar-futbolista')

const spanfutbolistaJugador = document.getElementById('futbolista-jugador')

const spanfutbolistaEnemigo = document.getElementById('futbolista-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataquesJugador')
const ataquesEnemigo = document.getElementById('ataquesEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let futbolistas = []
let ataqueJugador
let ataqueEnemigo
let opcionDeFutbolistas
let inputMessi 
let inputNeymar    
let inputCristiano 
let vidasJugador = 3
let vidasEnemigo = 3

class Futbolista {
    constructor (nombre, foto, vida,) {
        this.nombre = nombre
        this.foto = foto
    }
}

let Messi = new Futbolista('Messi', './fotos/Messi.png')
let Neymar = new Futbolista('Neymar', './fotos/Neymar.png')
let Cristiano = new Futbolista('Cristiano', './fotos/ronaldo.png')



futbolistas.push(Messi, Neymar, Cristiano)


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    futbolistas.forEach((futbolista) => {
        opcionDeFutbolistas = `
        <input type="radio" name="futbolista" id=${futbolista.nombre} />
        <label class="tarjeta-mokepon" for="${futbolista.nombre}">
            <p>${futbolista.nombre}</p>
            <img src="${futbolista.foto}" alt="${futbolista.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeFutbolistas

        inputMessi = document.getElementById('Messi')
        inputNeymar = document.getElementById('Neymar')    
        inputCristiano = document.getElementById('Cristiano')
})

    sectionReiniciar.style.display = 'none'
    botonfutbolistaJugador.addEventListener('click', seleccionarfutbolistaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonHielo.addEventListener('click', ataqueHielo)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}




function seleccionarfutbolistaJugador() {
    sectionSeleccionarAtaque.style.display = 'flex'    
    sectionSeleccionarFutbolista.style.display = 'none'

    if(inputMessi.checked) {
        spanfutbolistaJugador.innerHTML = inputMessi.id
    } else if(inputNeymar.checked) {
        spanfutbolistaJugador.innerHTML = inputNeymar.id
    } else if(inputCristiano.checked) {
        spanfutbolistaJugador.innerHTML = inputCristiano.id
    } else {
        alert("Selecciona un futbolista");
        reiniciarJuego()
    }
    seleccionarfutbolistaEnemigo()
    
    botonfutbolistaJugador.disabled = true
}

function seleccionarfutbolistaEnemigo() {
    let futbolistaAleatorio = aleatorio (0, futbolistas.length - 1)

    spanfutbolistaEnemigo.innerHTML = futbolistas [futbolistaAleatorio].nombre


    if (futbolistaAleatorio == 1) {
        spanfutbolistaEnemigo.innerHTML = 'Messi'
    } else if(futbolistaAleatorio == 2) {
        spanfutbolistaEnemigo.innerHTML = 'Neymar'
    } else {
        spanfutbolistaEnemigo.innerHTML = 'Cristiano'
    }
    
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataquealeatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataquealeatorioEnemigo()
}

function ataqueHielo() {
    ataqueJugador = 'Hielo'
    ataquealeatorioEnemigo()
}

function ataquealeatorioEnemigo() {
    let ataquealeatorio = aleatorio(1, 3)

    if (ataquealeatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataquealeatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Hielo'
    }

    combate()
}

function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empataste")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Hielo') {
        crearMensaje("Ganaste")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("Ganaste")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Hielo' && ataqueEnemigo == 'Agua') {
        crearMensaje("Ganaste")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste")
        vidasJugador = vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        mensajeFinal("GANASTEE :)")
        sectionReiniciar.style.display = 'block'
    } else if (vidasJugador == 0) {
        mensajeFinal("PERDISTE :(")
        sectionReiniciar.style.display = 'block'
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function mensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonHielo.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

window.addEventListener('load', iniciarJuego)
