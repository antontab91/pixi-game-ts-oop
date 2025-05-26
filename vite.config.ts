import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    base: '/pixi-ts-oop/',
    plugins: [
        tsconfigPaths(), // для того чтоб не писать все эти ../../ и тд
        checker({ typescript: true }), // запускает живую проверку типов TypeScript, как tsc --noEmit в фоне.
        visualizer(), // для оптимизации сколько весит каждый модуль, какие зависимости тянут больше всего.
    ],
    resolve: {
        alias: {
            '@core': '/src/core',
            '@utils': '/src/utils',
        },
    },
    define: {
        __DEV__: process.env.NODE_ENV === 'development',
    },
    server: {
        port: 8080,
        open: true,
    },

    build: {
        lib: {
            entry: 'src/PixiGame.ts',
            name: 'PixiGame',
            fileName: 'pixi-game',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['pixi.js'],
        },
    },
});
