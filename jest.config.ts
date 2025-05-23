module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
