import globals from "globals";
import pluginJs from "@eslint/js";


// eslint.config.js
export default [
    {
        files: ["**/*.js"],
        ignores: ["**/*.config.js"],
        rules: {
            semi: ["error", "never"]
        },
        linterOptions: {
            noInlineConfig: true
        }
    },
    {
        files: ["tests/**/*.js"],
        languageOptions: {
            globals: {
                it: "readonly",
                describe: "readonly"
            }
        }
    }
];