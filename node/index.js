const GLOBAL = (1, eval)('this')
const _obj = 'object'

module.exports = typeof global === _obj &&
  GLOBAL === global &&
  '[object global]' === Object.prototype.toString.call(global) &&
  typeof require === 'function' &&
  global.require === require &&
  typeof process === _obj &&
  global.process === process &&
  '[object process]' === Object.prototype.toString.call(process) &&
  process.versions &&
  process.versions.node &&
  typeof module === _obj &&
  typeof module.exports === _obj &&
  typeof require === 'function'
