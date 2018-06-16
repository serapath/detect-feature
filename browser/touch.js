const RENDERER = require('./renderer.js')

module.exports = !!(RENDERER &&
  ('ontouchstart' in window ||
  (window.DocumentTouch &&
  document instanceof window.DocumentTouch))) ||
  !!(typeof navigator !== 'undefined' &&
  (navigator.maxTouchPoints ||
  navigator.msMaxTouchPoints))
