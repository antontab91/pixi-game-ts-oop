import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import { checker } from 'vite-plugin-checker';

export default defineConfig({
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

    //   собирает игру как либу
    build: {
        lib: {
            entry: 'src/PixiGame.ts',
            name: 'PixiGame',
            fileName: 'pixi-game',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['pixi.js'],
            output: {
                manualChunks: {
                    vendor: ['pixi.js'],
                },
            },
        },
    },
});
