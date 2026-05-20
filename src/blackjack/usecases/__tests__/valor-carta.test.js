import { describe, it, expect } from 'vitest';
import { valorCarta } from '../valor-carta';

describe('valorCarta', () => {

    it('debe retornar el valor numérico de cartas del 2 al 9', () => {
        expect(valorCarta('2C')).toBe(2);
        expect(valorCarta('5H')).toBe(5);
        expect(valorCarta('9S')).toBe(9);
    });

    it('debe retornar 10 para la carta 10', () => {
        expect(valorCarta('10D')).toBe(10);
    });

    it('el As (A) debe valer 11', () => {
        expect(valorCarta('AC')).toBe(11);
        expect(valorCarta('AD')).toBe(11);
        expect(valorCarta('AH')).toBe(11);
        expect(valorCarta('AS')).toBe(11);
    });

    it('J, Q y K deben valer 10', () => {
        expect(valorCarta('JD')).toBe(10);
        expect(valorCarta('QS')).toBe(10);
        expect(valorCarta('KH')).toBe(10);
    });

});
