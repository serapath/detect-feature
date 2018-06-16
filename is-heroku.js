const NODE = require('./is-node')

module.exports = NODE &&
  process.env &&
  'HEROKU' in process.env ||
  'DYNO' in process.env &&
  process.env.HOME === '/app'
