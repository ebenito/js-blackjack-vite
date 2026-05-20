import { defineConfig } from 'vitest/config';

export default defineConfig({
    base: '/js-blackjack-vite/',
    plugins: [],
    test: {
        environment: 'node',
    }
});