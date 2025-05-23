module.exports = {
    collectCoverage: true, // Ativa a coleta de cobertura de testes
    collectCoverageFrom: ['src/**/*.{ts,tsx}'], // Quais arquivos serão usados para a cobertura
    coverageDirectory: 'coverage', // Pasta onde será salvo o relatório de cobertura

    testEnvironment: 'jest-environment-jsdom', // Ambiente de simulação do navegador (ideal para React)
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)', // Testes na pasta __tests__ com .js, .ts, .jsx, .tsx
        '**/?(*.)+(spec|test).[tj]s?(x)' // Arquivos com .spec ou .test (JS ou TS)
    ],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'], // ignora

    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest' // babel transforme esses arquivos
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
