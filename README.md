# PostCSS Content Entity [![Build Status][ci-img]][ci]

[PostCSS] plugin that allows to use html entities inside css content property.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/komarnitskyi/postcss-content-entity.svg
[ci]:      https://travis-ci.org/komarnitskyi/postcss-content-entity

```css
.foo:after {
    /* Input example */
    content: '&times;'
}
```

```css
.foo:after {
    /* Output example */
    content: '\d7;'
}
```

## Install 
NPM: 
   ```sh 
   npm i postcss-content-entity
   ```
Yarn: 
   ```sh 
   yarn add postcss-content-entity
   ```
## Usage


and use it with post css
```js
postcss([ require('postcss-content-entity') ])
```

See [PostCSS] docs for examples for your environment.
