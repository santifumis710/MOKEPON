const botonReiniciar = document.getElementById('boton-reiniciar')
const botonContinuarAtaque = document.getElementById('boton-continuar-ataque')
const botonContinuarDefensa = document.getElementById('boton-continuar-defensa')

const botonAtaqueDerecha = document.getElementById('boton-ataque-Derecha')
const botonAtaqueMedio = document.getElementById('boton-ataque-Medio')
const botonAtaqueIzquierda = document.getElementById('boton-ataque-Izquierda')

const botonDefensaIzquierda = document.getElementById('boton-defensa-izquierda')
const botonDefensaMedio = document.getElementById('boton-defensa-medio')
const botonDefensaDerecha = document.getElementById('boton-defensa-derecha')

const botonfutbolistaJugador = document.getElementById('boton-futbolista')
const botonarqueroJugador = document.getElementById('boton-arquero')
const sectionReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarFutbolista = document.getElementById('seleccionar-futbolista')
const sectionSeleccionarArquero = document.getElementById('seleccionar-arquero')
const sectionSeleccionarDefensa = document.getElementById('seleccionar-defensa')
const sectionContinuarAtaque = document.getElementById('continuar-ataque')
const sectionContinuarDefensa = document.getElementById('continuar-defensa')
const sectionfinalw = document.getElementById('seccion-final-ganador')
const sectionfinall = document.getElementById('seccion-final-perdedor')

const spanfutbolistaJugador = document.getElementById('futbolista-jugador')
const spanarqueroJugador = document.getElementById('arquero-jugador')

const spanfutbolistaEnemigo = document.getElementById('futbolista-enemigo')
const spanarqueroEnemigo = document.getElementById('arquero-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataquesJugador')
const ataquesEnemigo = document.getElementById('ataquesEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
constcontenedorTarjetasArquero = document.getElementById('contenedorTarjetasArquero')

let imagenFJugador = document.getElementById('imagen-futbolista-jugador')
let imagenAEnemigo = document.getElementById('imagen-arquero-enemigo')

let imagenAJugador = document.getElementById('imagen-arquero-jugador')
let imagenFEnemigo = document.getElementById ('imagen-futbolista-enemigo')

let futbolistas = []
let arqueros  = []
let ataqueJugador
let defensaJugador
let ataqueEnemigo
let opcionDeFutbolistas
let inputMessi 
let inputNeymar    
let inputCristiano 

let opcionDeArqueros
let inputDibu
let inputCasillas
let inputAlisson

let FutbolistaJugador
let imagenFutbolistaJ

let ArqueroJugador
let imagenArqueroJ

let FutbolistaEnemigo
let imagenFutbolistaE

let ArqueroEnemigo
let imagenArqueroE

let golesJugador = 0
let golesEnemigo = 0
let penalesPateadosJ = 0
let penalesPateadosE = 0

class Futbolista {
    constructor (nombre, foto,) {
        this.nombre = nombre
        this.foto = foto
    }
}

let Messi = new Futbolista('Messi', './fotos/Messi.png')
let Neymar = new Futbolista('Neymar', './fotos/Neymar.png')
let Cristiano = new Futbolista('Cristiano', './fotos/ronaldo.png')

class Arquero {
    constructor (nombre, foto) {
        this.nombre = nombre
        this.foto = foto
    }
}

let Dibu = new Arquero('Dibu', './fotos/Dibu.png')
let Casillas = new Arquero('Casillas', './fotos/Casillas.png')
let Alisson = new Arquero ('Alisson', './fotos/Alisson.png')


futbolistas.push(Messi, Neymar, Cristiano)

arqueros.push(Dibu, Casillas, Alisson)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionSeleccionarArquero.style.display = 'none'
    sectionSeleccionarDefensa.style.display = 'none'
    sectionContinuarAtaque.style.display = 'none'
    sectionContinuarDefensa.style.display = 'none'
    sectionfinall.style.display = 'none'
    sectionfinalw.style.display = 'none'

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

    arqueros.forEach((arquero) => {
        opcionDeArqueros = `
        <input type="radio" name="futbolista" id=${arquero.nombre} />
        <label class="tarjeta-mokepon" for="${arquero.nombre}">
            <p>${arquero.nombre}</p>
            <img src="${arquero.foto}" alt="${arquero.nombre}">
        </label>
        `
        contenedorTarjetasArquero.innerHTML += opcionDeArqueros

        inputDibu = document.getElementById('Dibu')
        inputCasillas = document.getElementById('Casillas')
        inputAlisson = document.getElementById('Alisson')
    })



    sectionReiniciar.style.display = 'none'
    botonfutbolistaJugador.addEventListener('click', seleccionarfutbolistaJugador)

    botonAtaqueIzquierda.addEventListener('click', ataqueIzquierda)
    botonAtaqueMedio.addEventListener('click', ataqueMedio)
    botonAtaqueDerecha.addEventListener('click', ataqueDerecha)

    botonDefensaIzquierda.addEventListener('click', defensaIzquierda)
    botonDefensaMedio.addEventListener('click', defensaMedio)
    botonDefensaDerecha.addEventListener('click', defensaDerecha)

    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonContinuarAtaque.addEventListener('click', seccionDefensa)
    botonContinuarDefensa.addEventListener('click', seccionAtaque)
}




function seleccionarfutbolistaJugador() {
    sectionSeleccionarAtaque.style.display = 'none'    
    sectionSeleccionarFutbolista.style.display = 'none'
    sectionSeleccionarArquero.style.display = 'flex'
    

    if(inputMessi.checked) {
        FutbolistaJugador = 'Messi'
        imagenFutbolistaJ = './fotos/messi.png'
        spanfutbolistaJugador.innerHTML = inputMessi.id
    } else if(inputNeymar.checked) {
        FutbolistaJugador = 'Neymar'
        imagenFutbolistaJ = './fotos/neymar.png'
        spanfutbolistaJugador.innerHTML = inputNeymar.id
    } else if(inputCristiano.checked) {
        FutbolistaJugador = 'Cristiano'
        imagenFutbolistaJ = './fotos/ronaldo.png'
        spanfutbolistaJugador.innerHTML = inputCristiano.id
    } else {
        alert("Selecciona un futbolista");
        reiniciarJuego()
    }
    
    seleccionarfutbolistaEnemigo()
    
    botonarqueroJugador.addEventListener('click', seleccionarArqueroJugador)
}

function seleccionarArqueroJugador() {
    sectionSeleccionarFutbolista.style.display = 'none'
    sectionSeleccionarArquero.style.display = 'none'
    
    if(inputDibu.checked) {
        ArqueroJugador = 'Dibu'
        imagenArqueroJ = './fotos/Dibu.png'
        spanarqueroJugador.innerHTML = inputDibu.id
    } else if(inputCasillas.checked) {
        ArqueroJugador = 'Casillas'
        imagenArqueroJ = './fotos/Casillas.png'
        spanarqueroJugador.innerHTML = inputCasillas.id
    } else if(inputAlisson.checked) {
        ArqueroJugador = 'Alisson'
        imagenArqueroJ = './fotos/Alisson.png'
        spanarqueroJugador.innerHTML = inputAlisson.id
    } else {
        alert("Selecciona un arquero");
        reiniciarJuego()
    }

    seleccionarArqueroEnemigo()
    
    imagenFJugador.innerHTML = ` <img src="${imagenFutbolistaJ}" alt="${FutbolistaJugador}"> `
    imagenAEnemigo.innerHTML = ` <img src="${imagenArqueroE}" alt="${ArqueroEnemigo}"> `

    seccionAtaque()    
}

function seleccionarfutbolistaEnemigo() {
    let futbolistaAleatorio = aleatorio (0, futbolistas.length - 1)

    spanfutbolistaEnemigo.innerHTML = futbolistas [futbolistaAleatorio].nombre


    if (futbolistaAleatorio == 1) {
        FutbolistaEnemigo = 'Messi'
        imagenFutbolistaE = './fotos/messi.png'
        spanfutbolistaEnemigo.innerHTML = 'Messi'
    } else if(futbolistaAleatorio == 2) {
        FutbolistaEnemigo = 'Neymar'
        imagenFutbolistaE = './fotos/neymar.png'
        spanfutbolistaEnemigo.innerHTML = 'Neymar'
    } else {
        FutbolistaEnemigo = 'Crsitiano'
        imagenFutbolistaE = './fotos/ronaldo.png'
        spanfutbolistaEnemigo.innerHTML = 'Cristiano'
    }
}

function seleccionarArqueroEnemigo() {
    let arqueroAleatorio = aleatorio (0, arqueros.length - 1)

    spanarqueroEnemigo.innerHTML = arqueros [arqueroAleatorio].nombre

    if (arqueroAleatorio == 1) {
        ArqueroEnemigo = 'Dibu'
        imagenArqueroE = './fotos/Dibu.png'
        spanarqueroEnemigo.innerHTML = 'Dibu'
    } else if (arqueroAleatorio == 2) {
        ArqueroEnemigo = 'Casillas'
        imagenArqueroE = './fotos/Casillas.png'
        spanarqueroEnemigo.innerHTML = 'Casillas'
    } else {
        ArqueroEnemigo = 'Alisson'
        imagenArqueroE = './fotos/Alisson.png'
        spanarqueroEnemigo.innerHTML = 'Alisson'
    }


    
}


function ataqueIzquierda() {
    ataqueJugador = 'Izquierda'
    ataquealeatorioEnemigo()
    ataque()
}

function ataqueMedio() {
    ataqueJugador = 'Medio'
    ataquealeatorioEnemigo()
    ataque()
}

function ataqueDerecha() {
    ataqueJugador = 'Derecha'
    ataquealeatorioEnemigo()
    ataque()
}

function defensaIzquierda() {
    defensaJugador = 'Izquierda'
    defensa()
}

function defensaMedio() {
    defensaJugador = 'Medio'
    defensa()
}

function defensaDerecha() {
    defensaJugador = 'Derecha'
    defensa()
}


function ataquealeatorioEnemigo() {
    let ataquealeatorio = aleatorio(1, 3)

    if (ataquealeatorio == 1) {
        ataqueEnemigo = 'Izquierda'
    } else if (ataquealeatorio == 2) {
        ataqueEnemigo = 'Medio'
    } else {
        ataqueEnemigo = 'Derecha'
    }
}

function seccionAtaque() {
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarDefensa.style.display = 'none'

    botonAtaqueIzquierda.disabled = false
    botonAtaqueMedio.disabled = false
    botonAtaqueDerecha.disabled = false

    
}

function ataque() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Atajo el arquero")
        botonAtaqueIzquierda.disabled = true
        botonAtaqueMedio.disabled = true
        botonAtaqueDerecha.disabled = true
        sectionContinuarAtaque.style.display = 'flex'
    } else {
        crearMensaje("GOOOOOOL")
        golesJugador = golesJugador + 1
        botonAtaqueIzquierda.disabled = true
        botonAtaqueMedio.disabled = true
        botonAtaqueDerecha.disabled = true
        sectionContinuarAtaque.style.display = 'flex'
    }
}

function seccionDefensa() {
    sectionSeleccionarDefensa.style.display = 'flex'
    sectionSeleccionarAtaque.style.display = 'none'

    botonDefensaIzquierda.disabled = false
    botonDefensaMedio.disabled = false
    botonDefensaDerecha.disabled = false

    imagenAJugador.innerHTML = ` <img src="${imagenArqueroJ}" alt="${ArqueroJugador}"> `
    imagenFEnemigo.innerHTML = ` <img src="${imagenFutbolistaE}" alt="${FutbolistaEnemigo}"> `

}

function defensa() {
    
    ataquealeatorioEnemigo()
    if (defensaJugador == ataqueEnemigo) {
        crearMensaje("ATAJO EL ARQUERO")
        penalesPateadosE = penalesPateadosE + 1
        botonDefensaIzquierda.disabled = true
        botonDefensaMedio.disabled = true
        botonDefensaDerecha.disabled = true
        revisarGoles()
        sectionContinuarDefensa.style.display = 'flex'
    } else {
        crearMensaje('Gol')
        penalesPateadosE = penalesPateadosE + 1
        golesEnemigo = golesEnemigo + 1
        botonDefensaIzquierda.disabled = true
        botonDefensaMedio.disabled = true
        botonDefensaDerecha.disabled = true
        revisarGoles()
        sectionContinuarDefensa.style.display = 'flex'
    }
}

function revisarGoles() {
    if (penalesPateadosE >= 5 && golesJugador > golesEnemigo) {
        sectionfinalw.style.display = 'flex'
        sectionSeleccionarDefensa.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'none'
    } else if (penalesPateadosE >= 5 && golesJugador < golesEnemigo) {
        sectionfinall.style.display = 'flex'
        sectionSeleccionarDefensa.style.display = 'none'
        sectionSeleccionarAtaque.style.display = 'none'
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


function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

window.addEventListener('load', iniciarJuego)
