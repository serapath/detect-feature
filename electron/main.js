const ELECTRON = require('./')

module.exports = typeof process !== 'undefined' &&
  typeof process.versions === 'object' &&
  !!process.versions.electron
