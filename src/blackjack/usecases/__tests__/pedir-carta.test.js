import { describe, it, expect } from 'vitest';
import { pedirCarta } from '../pedir-carta';

describe('pedirCarta', () => {

    it('debe retornar la última carta del deck', () => {
        const deck = ['2C', '3D', 'AH'];
        expect(pedirCarta(deck)).toBe('AH');
    });

    it('debe reducir el tamaño del deck en 1', () => {
        const deck = ['2C', '3D', 'AH'];
        pedirCarta(deck);
        expect(deck).toHaveLength(2);
    });

    it('debe lanzar un error si el deck está vacío', () => {
        expect(() => pedirCarta([])).toThrow('No hay cartas en el deck');
    });

    it('debe lanzar un error si no se pasa un deck', () => {
        expect(() => pedirCarta()).toThrow();
    });

    it('debe vaciar el deck si se piden todas las cartas', () => {
        const deck = ['2C'];
        pedirCarta(deck);
        expect(deck).toHaveLength(0);
    });

});
