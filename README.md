# has-feature
detects javascript environment features

The testable features will adapt and change over time based on what I perceive as important features that need to be distinguishable in terms of whether they are present or not. The goal is to adapt how other modules I write will solve their needs in different environments when it comes to supported features.

# usage
`npm install has-feature`

```js
const features = require('has-features')
/******************************************************************************
  USE
******************************************************************************/
const {
  WEB,
  TOUCH,
  WEBGL,
  STANDALONE,
  NODE,
  NPM,
  // WEBWORKER,
  // SERVICEWORKER,
  // WEBEXTENSION,
  // CORDOVA,
  // ELECTRON,
  // NWJS,
  REACTNATIVE,
  UWP,
  // JERRYSCRIPT,
  HEROKU,
} = features

if (WEB) console.log('is web')
if (TOUCH) console.log('is web touch')
if (WEBGL) console.log('is web webgl')
if (STANDALONE) console.log('is web standalone')
if (NODE) console.log('is node')
if (NPM) console.log('is npm scripts')
// if (WEBWORKER) console.log('is webworker')
// if (SERVICEWORKER) console.log('is serviceworker')
// if (WEBEXTENSION) console.log('is webextension')
// if (CORDOVA) console.log('is cordova')
// if (ELECTRON) console.log('is electron')
// if (NWJS) console.log('is nwjs')
if (REACTNATIVE) console.log('is react-native')
if (UWP) console.log('is universal windows platform')
// if (JERRYSCRIPT) console.log('is jerryscript')
if (HEROKU) console.log('is heroku')
/******************************************************************************
  OR
******************************************************************************/
if (require('has-feature/is-web')) console.log('is web')
if (require('has-feature/is-web-touch')) console.log('is web touch')
if (require('has-feature/is-webgl')) console.log('is web webgl')
if (require('has-feature/is-web-standalone')) console.log('is web standalone')
if (require('has-feature/is-node')) console.log('is node')
if (require('has-feature/is-npm-scripts')) console.log('is npm scripts')
// if (require('has-feature/is-webworker')) return console.log('is webworker')
// if (require('has-feature/is-serviceworker')) return console.log('is serviceworker')
// if (require('has-feature/is-webextension')) return console.log('is webextension')
// if (require('has-feature/is-cordova')) return console.log('is cordova')
// if (require('has-feature/is-electron')) return console.log('is electron')
// if (require('has-feature/is-nwjs')) return console.log('is nwjs')
if (require('has-feature/is-react-native')) console.log('is react-native')
if (require('has-feature/is-universal-windows-platform')) console.log('is universal windows platform')
// if (require('has-feature/is-jerryscript')) console.log('is jerryscript')
if (require('has-feature/is-heroku')) console.log('is heroku')
```
