module.exports = {
  "parser": "babel-eslint",
  "plugins": ["import", "jsx-a11y", "react", "react-hooks"],
  "root": true,
   "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },

  "settings": {
    "import/resolver": {
      "@kaliber/build/eslint-resolver-plugins/absolute-path-resolver-plugin": {
        "path": "./src"
      }
    },
    "react": {
      "version": "detect"
    }
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "generators": true,
      "experimentalObjectRestSpread": true
    }
  },

  "globals": {
    "Component": true,
    "React": true
  },

  "rules": {
    // http://eslint.org/docs/rules/

    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    // "indent": ["warn", 2, { "ignoredNodes": ["ConditionalExpression", "ConditionalExpression > CallExpression"] }], // needs better config to fit our needs

    "accessor-pairs": "warn",
    "array-callback-return": "warn",
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "comma-dangle": ["warn", "only-multiline"],
    "comma-spacing": "warn",
    "comma-style": "warn",
    "default-case": ["warn", { "commentPattern": "^no default$" }],
    "dot-location": ["warn", "property"],
    "eol-last": "warn",
    "eqeqeq": "warn",
    "keyword-spacing": "warn",
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-class-assign": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-const-assign": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-label": "warn",
    "no-extra-parens": ["warn", "functions"],
    "no-fallthrough": "warn",
    "no-floating-decimal": "warn",
    "no-func-assign": "warn",
    "no-global-assign": "warn",
    "no-implied-eval": "warn",
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": ["warn", { "allowLoop": true, "allowSwitch": false }],
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    // "no-multi-spaces": ["warn", { "ignoreEOLComments": true,  "exceptions": { "Property": true, "VariableDeclarator": true, "ImportDeclaration": true } }], // needs better config to fit our needs
    "no-path-concat": "warn",
    "no-proto": "warn",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "no-unsafe-negation": "warn",
    "no-useless-return": "warn",
    "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "semi-spacing": ["warn", { "before": false, "after": true }],
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", { "anonymous": "ignore", "named": "ignore", "asyncArrow": "always" }],
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { "words": true, "nonwords": false }],
    "template-tag-spacing": "warn",
    "no-mixed-operators": [
      "warn",
      {
        "groups": [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        "allowSamePrecedence": false
      },
    ],
    "no-multi-str": "warn",
    "no-native-reassign": "warn",
    "no-negated-in-lhs": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-restricted-globals": ["warn", "addEventListener", "blur", "close", "closed", "confirm", "defaultStatus", "defaultstatus", "event", "external", "find", "focus", "frameElement", "frames", "history", "innerHeight", "innerWidth", "length", "location", "locationbar", "menubar", "moveBy", "moveTo", "name", "onblur", "onwarn", "onfocus", "onload", "onresize", "onunload", "open", "opener", "opera", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "print", "removeEventListener", "resizeBy", "resizeTo", "screen", "screenLeft", "screenTop", "screenX", "screenY", "scroll", "scrollbars", "scrollBy", "scrollTo", "scrollX", "scrollY", "self", "status", "statusbar", "stop", "toolbar", "top"],
    "no-restricted-properties": [
      "warn",
      {
        "object": "require",
        "property": "ensure",
        "message": "Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting"
      },
      {
        "object": "System",
        "property": "import",
        "message": "Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting"
      },
    ],
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-undef": "warn",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "warn",
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true,
        "allowTernary": true,
        "allowTaggedTemplates": true
      },
    ],
    "no-unused-labels": "warn",
    "no-unused-vars": [
      "warn",
      {
        "args": "none",
        "ignoreRestSiblings": true
      },
    ],
    "no-use-before-define": [
      "warn",
      {
        "functions": false,
        "classes": false,
        "variables": false
      },
    ],
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "radix": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": ["warn", "never"],
    "strict": ["warn", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": "warn",
    "valid-typeof": "warn",

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/first": "warn",
    "import/no-amd": "warn",
    "import/no-webpack-loader-syntax": "warn",
    "import/no-duplicates": "warn",
    "import/export": "warn",
    "import/default": "warn",
    "import/no-unresolved": "warn",
    "import/named": "warn", // Needs a custom resolver to work with non-relative imports

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/jsx-boolean-value": "warn",
    // "react/jsx-closing-bracket-location": "warn", // needs better config to fit our needs
    // "react/jsx-closing-tag-location": "warn", // needs better config to fit our needs
    "react/jsx-curly-spacing": "warn",
    "react/jsx-equals-spacing": "warn",
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-key": "warn",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": ["warn", { "ignoreCase": true }],
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": ["warn", { "allowGlobals": true }],
    "react/jsx-pascal-case": ["warn", { "allowAllCaps": true }],
    "react/jsx-tag-spacing": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    // "react/jsx-wrap-multilines": "warn", // needs better config to fit our needs
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "warn",
    "react/no-direct-mutation-state": "warn",
    // "react/no-typos": "warn", // waiting for https://github.com/yannickcr/eslint-plugin-react/issues/1389
    "react/no-unused-prop-types": "warn",
    "react/prop-types": 0,
    "react/require-render-return": "warn",
    "react/self-closing-comp": "warn",
    "react/void-dom-elements-no-children": "warn",

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/html-has-lang": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn"
  }
}
