# Changelog

## Mejoras aplicadas

### Bootstrap local
- Eliminado el `<link>` CDN de `index.html`.
- Bootstrap instalado vía npm e importado en `main.js`.

### Feedback visual de resultados
- Eliminados todos los `alert()` y `console.warn()` del flujo de juego.
- Añadido `<h2 id="resultado-texto">` en `index.html` para mostrar el resultado al terminar la partida.
- Estilos añadidos en `style.css` (texto dorado con sombra).

### Separación lógica/DOM en `turnoComputadora`
- La función ya no recibe ni manipula elementos HTML como parámetros.
- Devuelve `{ puntosComputadora, cartasJugadas, resultado }`.
- El renderizado de cartas y actualización de puntos de la computadora se centraliza en `finalizarTurno()` dentro de `src/blackjack/index.js`.
- Eliminado el `setTimeout` que servía de parche para sincronizar el `alert`.

### Selectores DOM robustos
- Los elementos `<small>` ahora tienen `id="puntos-jugador"` e `id="puntos-computadora"`.
- Reemplazado `querySelectorAll('small')[0]` / `[1]` por `querySelector('#puntos-jugador')` / `querySelector('#puntos-computadora')`.

### Variable `puntosComputadora` correctamente rastreada
- La variable `puntosComputadora` en `index.js` ahora se actualiza con el valor real devuelto por `turnoComputadora()` tras cada turno.

### Lógica del As (soft hand)
- El As sigue valiendo 11 por defecto (`valor-carta.js` sin cambios).
- Si sumar el As lleva la mano a >21, se recontabiliza como 1 (se restan 10 puntos).
- La lógica aplica tanto al jugador (en `index.js`) como a la computadora (en `turno-computadora.js`).

### Corrección de idioma
- `<html lang="en">` corregido a `<html lang="es">` en `index.html`.

### Tests unitarios con Vitest
- Vitest instalado como dependencia de desarrollo.
- Script `"test": "vitest run"` añadido en `package.json`.
- `vite.config.js` migrado a `vitest/config` con entorno `node`.
- 4 archivos de test, 22 casos en total:

| Archivo | Tests |
|---|---|
| `__tests__/crear-deck.test.js` | 7 |
| `__tests__/valor-carta.test.js` | 4 |
| `__tests__/pedir-carta.test.js` | 5 |
| `__tests__/turno-computadora.test.js` | 6 |
