import { describe, it, expect } from 'vitest';
import { crearDeck } from '../crear-deck';

const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

describe('crearDeck', () => {

    it('debe retornar un arreglo de 52 cartas', () => {
        const deck = crearDeck(tipos, especiales);
        expect(deck).toHaveLength(52);
    });

    it('debe lanzar un error si tiposDeCarta está vacío', () => {
        expect(() => crearDeck([], especiales)).toThrow();
    });

    it('debe lanzar un error si tiposEspeciales está vacío', () => {
        expect(() => crearDeck(tipos, [])).toThrow();
    });

    it('debe lanzar un error si tiposDeCarta no se pasa', () => {
        expect(() => crearDeck(null, especiales)).toThrow();
    });

    it('debe contener cartas del 2 al 10 para cada tipo', () => {
        const deck = crearDeck(tipos, especiales);
        for (let i = 2; i <= 10; i++) {
            for (const tipo of tipos) {
                expect(deck).toContain(`${i}${tipo}`);
            }
        }
    });

    it('debe contener las cartas especiales para cada tipo', () => {
        const deck = crearDeck(tipos, especiales);
        for (const esp of especiales) {
            for (const tipo of tipos) {
                expect(deck).toContain(`${esp}${tipo}`);
            }
        }
    });

    it('el deck debe estar mezclado', () => {
        // Con 52 cartas, la probabilidad de que queden en orden original es ~0
        const deck = crearDeck(tipos, especiales);
        const ordenOriginal = [];
        for (let i = 2; i <= 10; i++) tipos.forEach(t => ordenOriginal.push(`${i}${t}`));
        tipos.forEach(t => especiales.forEach(e => ordenOriginal.push(`${e}${t}`)));
        expect(deck).not.toEqual(ordenOriginal);
    });

});
