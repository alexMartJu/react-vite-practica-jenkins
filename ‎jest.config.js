export default {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.jsx', '.js'], // Trata estos archivos como ESM
    testEnvironment: 'node',
    transformIgnorePatterns: [
        'node_modules/(?!(lodash-es)/)' // Excluye lodash-es de la regla de ignorar
    ],
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: [
        "**/src/**/*.test.js"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};