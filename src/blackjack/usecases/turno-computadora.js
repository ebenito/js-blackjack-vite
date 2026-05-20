import { pedirCarta } from './pedir-carta';
import { valorCarta } from './valor-carta';

/**
 * turno de la computadora (sin efectos de DOM)
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @returns {{ puntosComputadora: number, cartasJugadas: string[], resultado: string }}
 */
export const turnoComputadora = ( puntosMinimos, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');

    let puntosComputadora = 0;
    let aces = 0;
    const cartasJugadas = [];

    do {
        const carta = pedirCarta( deck );
        cartasJugadas.push( carta );

        if ( carta.startsWith('A') ) aces++;
        puntosComputadora += valorCarta( carta );

        if ( puntosComputadora > 21 && aces > 0 ) {
            puntosComputadora -= 10;
            aces--;
        }

        if ( puntosMinimos > 21 ) break;

    } while ( puntosComputadora < puntosMinimos && puntosMinimos <= 21 );

    let resultado;
    if ( puntosMinimos > 21 ) {
        resultado = 'computadora-gana';
    } else if ( puntosComputadora === puntosMinimos ) {
        resultado = 'empate';
    } else if ( puntosComputadora > 21 ) {
        resultado = 'jugador-gana';
    } else {
        resultado = 'computadora-gana';
    }

    return { puntosComputadora, cartasJugadas, resultado };
}