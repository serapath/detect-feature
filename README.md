# detect-feature
detects javascript environment and features

# contribution
feel free to make a PR to add any of the cases that are commented out for now

# usage
`npm install detect-feature`

```js
const features = require('detect-features')
/******************************************************************************
  USE
******************************************************************************/
const {
  WEB,
  NODE,
  NPM,
  // WEBWORKER,
  // SERVICEWORKER,
  // WEBEXTENSION,
  // CORDOVA,
  // ELECTRON,
  // NWJS,
  REACTNATIVE,
  // JERRYSCRIPT,
  HEROKU,
} = features

if (WEB) console.log('is web')
if (NODE) console.log('is node')
if (NPM) console.log('is npm scripts')
// if (WEBWORKER) console.log('is webworker')
// if (SERVICEWORKER) console.log('is serviceworker')
// if (WEBEXTENSION) console.log('is webextension')
// if (CORDOVA) console.log('is cordova')
// if (ELECTRON) console.log('is electron')
// if (NWJS) console.log('is nwjs')
if (REACTNATIVE) console.log('is react-native')
// if (JERRYSCRIPT) console.log('is jerryscript')
if (HEROKU) console.log('is heroku')
/******************************************************************************
  OR
******************************************************************************/
if (require('detect-feature/is-web')) console.log('is web')
if (require('detect-feature/is-node')) console.log('is node')
if (require('detect-feature/is-npm-scripts')) console.log('is npm scripts')
// if (require('detect-feature/is-webworker')) return console.log('is webworker')
// if (require('detect-feature/is-serviceworker')) return console.log('is serviceworker')
// if (require('detect-feature/is-webextension')) return console.log('is webextension')
// if (require('detect-feature/is-cordova')) return console.log('is cordova')
// if (require('detect-feature/is-electron')) return console.log('is electron')
// if (require('detect-feature/is-nwjs')) return console.log('is nwjs')
if (require('detect-feature/is-react-native')) console.log('is react-native')
// if (require('detect-feature/is-jerryscript')) console.log('is jerryscript')
if (require('detect-feature/is-heroku')) console.log('is heroku')
```
