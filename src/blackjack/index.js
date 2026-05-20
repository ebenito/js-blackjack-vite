import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador     = 0;
let puntosComputadora = 0;
let acesJugador       = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosJugadorHTML     = document.querySelector('#puntos-jugador');
const puntosComputadoraHTML = document.querySelector('#puntos-computadora');
const resultadoTexto        = document.querySelector('#resultado-texto');

deck = crearDeck(tipos, especiales);

const mensajesResultado = {
    'jugador-gana':    '¡Jugador gana!',
    'computadora-gana': 'La computadora gana',
    'empate':           'Nadie gana :(',
};

const mostrarResultado = ( resultado ) => {
    resultadoTexto.innerText = mensajesResultado[resultado] ?? '';
};

const finalizarTurno = () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    const { puntosComputadora: ptosComp, cartasJugadas, resultado } =
        turnoComputadora( puntosJugador, deck );

    puntosComputadora = ptosComp;
    puntosComputadoraHTML.innerText = puntosComputadora;

    cartasJugadas.forEach( carta => {
        divCartasComputadora.append( crearCartaHTML( carta ) );
    });

    mostrarResultado( resultado );
};

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );

    if ( carta.startsWith('A') ) acesJugador++;
    puntosJugador += valorCarta( carta );

    if ( puntosJugador > 21 && acesJugador > 0 ) {
        puntosJugador -= 10;
        acesJugador--;
    }

    puntosJugadorHTML.innerText = puntosJugador;
    divCartasJugador.append( crearCartaHTML( carta ) );

    if ( puntosJugador >= 21 ) {
        finalizarTurno();
    }

});


btnDetener.addEventListener('click', () => {
    finalizarTurno();
});

btnNuevo.addEventListener('click', () => {

    deck = crearDeck( tipos, especiales );

    puntosJugador     = 0;
    puntosComputadora = 0;
    acesJugador       = 0;

    puntosJugadorHTML.innerText     = 0;
    puntosComputadoraHTML.innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML     = '';

    resultadoTexto.innerText = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
