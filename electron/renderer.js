const ELECTRON = require('./')

module.exports = typeof window !== 'undefined' &&
  typeof window.process === 'object' &&
  window.process.type === 'renderer'
