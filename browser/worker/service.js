const WORKER = require('./is-worker')
const _obj = 'object'

module.exports = WORKER &&
  navigator.serviceWorker &&
  self.ServiceWorkerGlobalScope !== _obj &&
  self instanceof ServiceWorkerGlobalScope
