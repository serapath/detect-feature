// https://github.com/electron/electron/issues/2288
const RENDERER = typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer'
const MAIN = typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron
const NODEINTEGRATION = typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0
module.exports = RENDERER ||
  MAIN ||
  NODEINTEGRATION
