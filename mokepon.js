let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let botonfutbolistaJugador


function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    botonfutbolistaJugador = document.getElementById('boton-futbolista')

    botonfutbolistaJugador.addEventListener('click', seleccionarfutbolistaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonHielo = document.getElementById('boton-Hielo')
    botonHielo.addEventListener('click', ataqueHielo)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarfutbolistaJugador() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let sectionSeleccionarFutbolista = document.getElementById('seleccionar-futbolista')
    sectionSeleccionarFutbolista.style.display = 'none'

    let inputMessi = document.getElementById('Messi')
    let inputNeymar = document.getElementById('Neymar')
    let inputCristiano = document.getElementById('Cristiano')
    let spanfutbolistaJugador = document.getElementById('futbolista-jugador')

    if(inputMessi.checked) {
        spanfutbolistaJugador.innerHTML = 'Messi'
    }
    else if(inputNeymar.checked) {
        spanfutbolistaJugador.innerHTML = 'Neymar'
    }
    else if(inputCristiano.checked) {
        spanfutbolistaJugador.innerHTML = 'Cristiano'
    }
    else {
        alert("Selecciona un futbolista");
        reiniciarJuego()
    }
    
    seleccionarfutbolistaEnemigo()
    
    botonfutbolistaJugador.disabled = true
}

function seleccionarfutbolistaEnemigo() {
    let futbolistaAleatorio = aleatorio (1,3)
    let spanfutbolistaEnemigo = document.getElementById('futbolista-enemigo')

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

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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
        
        let sectionReiniciar = document.getElementById('reiniciar')
        sectionReiniciar.style.display = 'block'

    } else if (vidasJugador == 0) {
        mensajeFinal("PERDISTE :(")

        let sectionReiniciar = document.getElementById('reiniciar')
        sectionReiniciar.style.display = 'block'
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesJugador = document.getElementById('ataquesJugador')
    let ataquesEnemigo = document.getElementById('ataquesEnemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function mensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonHielo = document.getElementById('boton-Hielo')
    botonHielo.disabled = true
}

function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

window.addEventListener('load', iniciarJuego)
