const WORKER = require('./is-worker')
const _obj = 'object'

module.exports = WORKER &&
  self.DedicatedWorkerGlobalScope === _obj &&
  self instanceof DedicatedWorkerGlobalScope
