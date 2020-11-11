module.exports = {
    files: [
        "./**/*.tsx",
    ],
    parser: "@typescript-eslint/parser",
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        node: true,
        es2020: true
    },
    parserOptions: {
        sourceType: 'module',
        jsx: true,
    }
}
