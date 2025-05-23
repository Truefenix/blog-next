module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
