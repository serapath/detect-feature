const NODE = require('./is-node')

module.exports = NODE &&
  process.env &&
  'npm_config_username' in process.env ||
	'npm_package_name' in process.env ||
	'npm_config_heading' in process.env
