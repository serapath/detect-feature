const _undef = 'undefined'

module.exports = typeof process !== _undef &&
  process.versions &&
  process.versions.node &&
  typeof module !== _undef &&
  typeof module.exports !== _undef
