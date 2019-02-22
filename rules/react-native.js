/**
 * React Native
 * React Native specific linting rules for ESLint.
 * https://github.com/Intellicode/eslint-plugin-react-native
 */

module.exports = {
    "rules": {
        /**
         * Detect color literals in styles.
         * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
         */
        "react-native/no-color-literals": "off",
        /**
         * Detect inline styles in components.
         * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
         */
        "react-native/no-inline-styles": "warn",
        /**
         * Detect raw text outside of Text component.
         * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
         */
        "react-native/no-raw-text": "off",
        /**
         * Detect unused StyleSheet rules in React components.
         * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
         */
        "react-native/no-unused-styles": "error",
        /**
         * Enforce using platform specific filenames when necessary.
         * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
         */
        "react-native/split-platform-components": "warn",
        /**
         * Require StyleSheet keys to be sorted.
         * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/sort-styles.md
         */
        "react-native/sort-styles": "off",
    },
};