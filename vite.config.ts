import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
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
        __DEV__: mode === 'development',
    },
    server: {
        port: 8080,
        open: true,
    },
    build:
        mode === 'production'
            ? {} // обычная сборка, как SPA
            : {
                  lib: {
                      entry: 'src/PixiGame.ts',
                      name: 'PixiGame',
                      fileName: 'pixi-game',
                      formats: ['es', 'umd'],
                  },
                  rollupOptions: {
                      output: {},
                  },
              },
}));
