
const GLOBAL = (1, eval)('this')

module.exports = typeof global === 'object' &&
  GLOBAL === global &&
  '[object global]' === Object.prototype.toString.call(global) &&
  typeof process === 'object' &&
  global.process === process &&
  '[object process]' === Object.prototype.toString.call(process) &&
  process.versions &&
  process.versions.node &&
  typeof require === 'function' &&
  typeof module === 'object' &&
  typeof module.exports === 'object'
