const WORKER = require('./is-worker')
const _obj = 'object'

module.exports = WORKER &&
  self.SharedWorkerGlobalScope !== _obj &&
  self instanceof SharedWorkerGlobalScope
