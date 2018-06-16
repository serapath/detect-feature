const GLOBAL = (1, eval)('this')
const _obj = 'object'

module.exports = typeof window === _obj &&
  GLOBAL === window &&
  typeof Window === _obj
  window.Window === Window &&
  window instanceof Window &&
  window.self === window &&
  typeof navigator === _obj &&
  window.navigator === navigator &&
  typeof document === _obj &&
  window.document === document &&
  document.nodeType === 9 &&
  document.defaultView === window
