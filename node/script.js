const NODE = require('./index.js')
const _obj = 'object'
const undef = 'undefined'

module.exports = NODE &&
  typeof module === _obj &&
  !module.parent === _undef &&
  require.main === module
