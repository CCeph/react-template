# React Template

A react template that includes react testing, proptypes, react router, and tailwind css.

## Suggested Settings

The following are the VScode workspace settings that were used when creating this template:

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"],

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,

  // Always open css files in Tailwind CSS mode, which fixes unknown tailwind @rules warning.
  "files.associations": {
    "*.css": "tailwindcss"
  },

  // Improves tailwind autocomplete experience.
  "editor.quickSuggestions": {
    "strings": "on"
  }
}
```

It is suggested to install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) VScode extention along with using the settings above. This will remove the editor warnings for Tailwind custom @rules. It will also provide other quality of life features such as autocomplete, syntax highlighting and linting.
