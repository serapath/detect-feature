const RENDERER = require('./renderer.js')

module.exports = RENDERER &&
  (() => { try { return window.top === window.self } catch (err) { } })()
