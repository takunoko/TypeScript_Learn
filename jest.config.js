module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "js"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
    testMatch: ["**/tests/**/*.test.ts"],
    moduleNameMapper: {
        "^@/(.+)$": "<rootDir>/ts/$1",
    },
};