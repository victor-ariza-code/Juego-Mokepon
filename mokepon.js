const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJuagador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueaya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let mokepones = []
let ataqueJugador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3 

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-de-ataque'},
    { nombre: '💧', id: 'boton-de-ataque'},
    { nombre: '💧', id: 'boton-de-ataque'},
    { nombre: '🔥', id: 'boton-de-fuego'},
    { nombre: '🌱', id: 'boton-de-tierra'},
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-de-tierra'},
    { nombre: '🌱', id: 'boton-de-tierra'},
    { nombre: '🌱', id: 'boton-de-tierra'},
    { nombre: '💧', id: 'boton-de-ataque'},
    { nombre: '🔥', id: 'boton-de-fuego'},
    
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-de-fuego'},
    { nombre: '🔥', id: 'boton-de-fuego'},
    { nombre: '🔥', id: 'boton-de-fuego'},
    { nombre: '💧', id: 'boton-de-ataque'},
    { nombre: '🌱', id: 'boton-de-tierra'},
)



function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJuagador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTiera)
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display ='none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {  
        spanMascotaJugador.innerHTML = 'Hipodoge' 
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueaya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
       
}
 
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
   
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodegue'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else 
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    



}

function ataqueFuego (){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo() 
}
function ataqueAgua (){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTiera (){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo() 
}   

function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate() {   

    if(ataqueEnemigo == ataqueJugador) {
         crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")  
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo  
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo      
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo    
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
       spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()

}

function revisarVidas() {
    if (vidasEnemigo == 0){
    crearMensajeFinal("GANASTE, Felicitaciones 🎉")
    } else if (vidasJugador == 0){
    crearMensajeFinal("PERDISTE, lo siento 😢") 
    } 

}

function crearMensaje(resultado) {
 
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
   
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true 
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()    

}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)


