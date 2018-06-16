const NODE = require('./is-node')
// @ NOTE: http://nodejs.org/docs/latest/api/all.html#all_cluster
module.exports = NODE &&
  'NODE_UNIQUE_ID' in process.env
