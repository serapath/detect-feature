const RENDERER = require('./renderer.js')
const _obj = 'object'

module.exports = RENDERER &&
  (() => {
    try { return (window !== window.parent &&
      window.frameElement &&
      window.frameElement.nodeName == "IFRAME"
      (window.frameElement+"").indexOf("HTMLIFrameElement") > -1)
    } catch (err) { }
  })()
