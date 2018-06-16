const GLOBAL = (1, eval)('this')
const _obj = 'object'

module.exports = typeof self === _obj &&
  GLOBAL === self &&
  typeof navigator === _obj &&
  self.navigator === navigator &&
  navigator instanceof WorkerNavigator &&
  typeof importScripts === 'function' &&
  self.importScripts === importScripts
