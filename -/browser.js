"use strict"

const GLOBAL = (1, eval)('this')

module.exports = typeof window === 'object' &&
  GLOBAL === window &&
  typeof Window === 'function' &&
  window.Window === Window &&
  window instanceof Window &&
  window.self === window &&
  typeof navigator === 'object' &&
  window.navigator === navigator &&
  typeof document === 'object' &&
  window.document === document &&
  document.nodeType === 9 &&
  document.defaultView === window
