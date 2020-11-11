import mainEslintConfig from './.eslintrc.main';
import rendererEslintConfig from './.eslintrc.renderer';

const commonRules = {
    "indent": ["error", 2],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "double"
    ],
}

module.exports = {
    overrides: [
        {
            ...mainEslintConfig,
            rules: {
                ...commonRules,
            }
        },
        {
            ...rendererEslintConfig,
            rules: {
                ...commonRules,
            }
        }
    ]
};
