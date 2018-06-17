# does-support
detects javascript environment features

The testable features will adapt and change over time based on what I perceive as important features that need to be distinguishable in terms of whether they are present or not. The goal is to adapt how other modules I write will solve their needs in different environments when it comes to supported features.

# usage
`npm install does-support`

```js
const supports = require('does-support')
/******************************************************************************
  USE
******************************************************************************/
const { BROWSER, NODE } = supports
if (WEB) console.log('is web')
if (NODE) console.log('is node')
/******************************************************************************
  OR
******************************************************************************/
if (require('does-support/-/browser')) console.log('is browser')
if (require('does-support/-/node')) console.log('is node')
```
