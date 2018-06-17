const NODE = require('../-/node.js')
const BROWSER = require('../-/browser.js')

document.body.innerHTML = `
 <h1> TEST </h1>
 <ul>
  <li> node: ${NODE} </li>
  <li> browser: ${BROWSER} </li>
 </ul>
`
