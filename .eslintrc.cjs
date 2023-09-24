module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        './.eslintrc-auto-import.json'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                'src/views/**/*.vue'
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "rules": {
                'vue/multi-word-component-names': 0,
            },
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": ["off"],
        'vue/multi-word-component-names': 'off',
    }
}
