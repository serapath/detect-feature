const _obj = 'object'

module.exports = typeof process === _obj &&
  (process.platform === 'win32' ||
  typeof process.env === _obj &&
  /^(msys|cygwin)$/.test(process.env.OSTYPE)
