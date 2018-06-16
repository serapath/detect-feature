const WEB = require('./is-web')

module.exports = WEB &&
  window.matchMedia('(display-mode: standalone)').matches
