const CLUSTER = require('./is-cluster')
module.exports = CLUSTER &&
  !process.env.NODE_UNIQUE_ID
