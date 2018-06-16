const RENDERER = require('./renderer.js')

module.exports = RENDERER &&
  (() => {
    try {
      const canvas = document.createElement('canvas')
      return !!window.WebGLRenderingContext &&
        (!!canvas.getContext('experimental-webgl') ||
        !!canvas.getContext('webgl'))
    } catch (err) { }
  })()
