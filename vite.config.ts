import { dirname, resolve } from 'path'; // resolve для entry
import { visualizer } from 'rollup-plugin-visualizer'; // визуализация размера бандла
import { fileURLToPath } from 'url'; // для корректного пути
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker'; // запускает проверку типов в dev-сервере
import tsconfigPaths from 'vite-tsconfig-paths'; // подтягивает alias'ы из tsconfig.json

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
    // базовый путь для GitHub Pages (например, username.github.io/pixi-ts-oop)
    base: '/pixi-ts-oop/',

    plugins: [
        tsconfigPaths(), // подключает поддержку alias'ов из tsconfig.json
        checker({ typescript: true }), // проверка типов как `tsc --noEmit` в фоне
        visualizer(), // создаёт HTML-файл с визуальной разбивкой по весу модулей
    ],

    resolve: {
        alias: {
            '@core': '/src/core', // теперь можно писать: import X from '@core/SomeFile'
            '@utils': '/src/utils', // для вспомогательных функций
        },
    },

    // глобальная переменная __DEV__ будет true только в режиме разработки
    define: {
        __DEV__: mode === 'development',
    },

    server: {
        port: 8080, // запускает dev-сервер на 8080
        open: true, // автооткрытие браузера
    },

    // Разные конфигурации под production/dev
    build:
        mode === 'production'
            ? {
                  // стандартная SPA сборка, сюда можно добавить minify, target и пр. при необходимости
              }
            : {
                  // в dev-режиме можно собрать как библиотеку для теста/отладки
                  lib: {
                      entry: resolve(__dirname, 'src/PixiGame.ts'), // точка входа (с абсолютным путём)
                      name: 'PixiGame', // глобальное имя UMD-бандла
                      fileName: 'pixi-game', // имя выходного файла
                      formats: ['es', 'umd'], // два формата: ESM и UMD
                  },
                  rollupOptions: {
                      output: {}, // можно добавить external/deps если нужно
                  },
              },
}));
