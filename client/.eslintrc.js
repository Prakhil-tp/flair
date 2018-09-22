module.exports = {
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
      "import/no-unresolved": "off"
    },
    "parser": "babel-eslint"

};