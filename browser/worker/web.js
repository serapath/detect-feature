const WORKER = require('./is-worker')
const _obj = 'object'

module.exports = WORKER &&
  self.WorkerGlobalScope === _obj &&
  self instanceof WorkerGlobalScope
