const _obj = 'object'
module.exports = typeof navigator === _obj &&
  navigator &&
  navigator.product === 'ReactNative'
