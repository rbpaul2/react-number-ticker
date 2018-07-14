# react-number-ticker

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Drop-in react component for displaying numbers with animated transitions.

![alt text][logo]

[logo]: https://github.com/rbpaul2/react-number-ticker/raw/master/preview-react-number-ticker-1.0.0.gif "Clock Demo"

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

# How to use 

## In a basic html page

Include the UMD build in the `<head></head>` section of your html (also includes React, CSSTransitionGroup)

```html
<script src="https://unpkg.com/react-number-ticker@1.0.0/umd/react-number-ticker.min.js"></script>
```

Include the CSS file (Ticker uses CSS3 transition animations when changing digits)

```html
<script src="https://unpkg.com/react-number-ticker@1.0.0/umd/main.css"></script>
```

Write the something like this in the body of your html:

```html
<body>
  <div id="root"></div>
  <script>
    ReactDOM.render(
      React.createElement(ReactNumberTicker),
      document.getElementById('root')
    );
  </script>
</body>
```

# Use Cases

- Dynamic numbers that change with user input 
- Timers
- (potentially) Sequence of words