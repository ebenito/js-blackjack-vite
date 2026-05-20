import { describe, it, expect } from 'vitest';
import { turnoComputadora } from '../turno-computadora';

describe('turnoComputadora', () => {

    it('debe retornar puntosComputadora, cartasJugadas y resultado', () => {
        const deck = ['2C', '3D', '4H', '5S', '6C', '7D', '8H', '9S'];
        const { puntosComputadora, cartasJugadas, resultado } = turnoComputadora(15, deck);
        expect(puntosComputadora).toBeGreaterThanOrEqual(15);
        expect(cartasJugadas.length).toBeGreaterThan(0);
        expect(['jugador-gana', 'computadora-gana', 'empate']).toContain(resultado);
    });

    it('debe declarar computadora-gana si el jugador se pasó de 21', () => {
        const deck = ['2C'];
        const { resultado } = turnoComputadora(22, deck);
        expect(resultado).toBe('computadora-gana');
    });

    it('debe declarar jugador-gana si la computadora se pasa de 21', () => {
        // Computadora con 17, pide más hasta pasarse
        const deck = ['5H', '9D', '8C']; // 8+9=17 < 18, pide 5 → 22 > 21
        const { resultado } = turnoComputadora(18, deck);
        expect(resultado).toBe('jugador-gana');
    });

    it('debe declarar empate si ambos tienen el mismo puntaje', () => {
        const deck = ['9C', '6D']; // 6+9=15 → empate con 15
        const { resultado } = turnoComputadora(15, deck);
        expect(resultado).toBe('empate');
    });

    it('debe ajustar el As de 11 a 1 si se pasa de 21', () => {
        // Computadora empieza, As=11, 5=5 → 16, necesita 18 → pide más
        // Con As=1 (ajustado), no se pasa
        const deck = ['3D', '5C', 'AS']; // pop: AS=11 → 11, necesita 18 → pide 5C → 16, pide 3D → 19 >= 18
        const { puntosComputadora } = turnoComputadora(18, deck);
        expect(puntosComputadora).toBeLessThanOrEqual(21);
    });

    it('debe lanzar error si puntosMinimos es 0 o no se pasa', () => {
        expect(() => turnoComputadora(0, ['2C'])).toThrow('Puntos mínimos son necesarios');
        expect(() => turnoComputadora(null, ['2C'])).toThrow();
    });

});
