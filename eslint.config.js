import js from '@eslint/js'; // Базовые правила JavaScript
import tseslint from 'typescript-eslint'; // Рекомендации для TypeScript
import simpleImportSort from 'eslint-plugin-simple-import-sort'; // Плагин сортировки импортов

export default [
    js.configs.recommended, // Базовые рекомендации ESLint
    ...tseslint.configs.recommended, // Рекомендации typescript-eslint
    {
        plugins: {
            'simple-import-sort': simpleImportSort, // Подключаем плагин как ключ:значение
        },
        rules: {
            semi: ['error', 'always'], // Всегда ставим ; в конце строки
            quotes: ['error', 'single'], // Используем только одинарные кавычки
            '@typescript-eslint/no-unused-vars': ['warn'], // Варн на неиспользуемые переменные

            // Группировка импортов в логичном порядке
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        // 1. Сторонние библиотеки (в том числе pixi.js)
                        ['^pixi\\.js$', '^@?\\w', '^[^.]'],

                        // 2. Алиасы проекта
                        ['^(@core|@utils|@game|@scenes|@ui)(/.*|$)'],

                        // 3. Относительные импорты: выше по дереву
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

                        // 4. Относительные импорты: в текущей папке
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

                        // 5. Файлы стилей, иконки, изображения
                        ['^.+\\.s?css$', '^.+\\.svg$', '^.+\\.png$'],
                    ],
                },
            ],

            'simple-import-sort/exports': 'error', // Сортировка экспортов — обязательна
        },

        // Исключаем мусорные и сгенерированные директории из анализа
        ignores: ['dist/**', 'node_modules/**'],
    },
];
