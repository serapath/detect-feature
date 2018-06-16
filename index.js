// INSPIRATION: https://github.com/MikeKovarik/platform-detect/blob/master/index.mjs
module.exports = {
  WEB: require('./is-web'),
  TOUCH: require('./is-web-touch'),
  WEBGL: require('./is-webgl'),
  STANDALONE: require('./is-web-standalone'),
  NODE: require('./is-node'),
  NPM: require('./is-npm-scripts'),
  // WEBWORKER: require('./is-webworker'),
  // SERVICEWORKER: require('./is-serviceworker'),
  // WEBEXTENSION: require('./is-webextension'),
  // CORDOVA: require('./is-cordova'),
  // ELECTRON: require('./is-electron'),
  // NWJS: require('./is-nwjs'),
  REACTNATIVE: require('./is-react-native'),
  UWP: require('./is-universal-windows-platform'),
  // JERRYSCRIPT: require('./is-jerryscript'),
  HEROKU: require('./is-heroku'),
}

// @TODO:
// // Node + Chromium
// var nwjs     = hasNav && node && !!process.versions.nw
// var electron = hasNav && node && !!process.versions.electron
// // Cordova mobile app
// var cordova = hasNav && !!window.cordova
// // Chrome app (Chrome OS app)
// var chromeapp = undefined // todo
// // Is the app just a plain old website, in a browsers, without node or any other special system bindings.
// var web = !node && !pwa && !uwp && !nwjs && !electron && !cordova && !chromeapp// && typeof window === 'object'
// // Script is executed inside Web Worker
// var worker = !hasNav && typeof self !== 'undefined' && !!self.importScripts && !!self.close
//
// // OS
//
// var windows  = node ? process.platform === 'win32'  : ua.includes('Windows')
// var macosx   = node ? process.platform === 'darwin' : ua.includes('Macintosh')
// var linux    = node ? process.platform === 'linux'  : undefined // TODO
// var chromeos = hasNav && ua.includes('CrOS') // TODO
// var android  = hasNav && ua.includes('Android') // TODO
//
//
// // RENDERING ENGINE
//
// // These return true if their rendering engine is used to render the app.
// // I.e: UWP apps are rendered by Edge's EdgeHTML, Electron/NWJS apps are rendered by Chromium.s
// var edge    = hasNav && ua.includes('Edge')
// var chrome  = hasNav && ua.includes('Chrome') && !ua.includes('Edge') // TODO: verify
// var firefox = undefined // TODO
//
//
// // OTHER
//
// // Detects if the platform is constrained by Cancerous Security Policy.
// var csp = uwp || chromeapp
// // Supports service workers
// var supportsServiceWorker = typeof navigator !== 'undefined' && !!navigator.serviceWorker && !!navigator.serviceWorker.register
//
//
// // FORM FACTOR
// var touch = typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0
// // TODO: something like hasKeyboard, hasMouse, hasInk so this lib could be helpful
// // in variety of uwp, node, or iot apps.
// // TODO: form factor like desktop, mobile, tablet, laptop
//
// export default {
// 	// system
// 	windows, android, chromeos,
// 	// rendering engine
// 	edge, chrome,
// 	// runtime
// 	node, web,
// 	pwa, uwp, cordova, chromeapp, nwjs, electron,
// 	// form factor
// 	touch,
// 	// app features
// 	window:  hasNav,
// 	console: isConsole,
// 	// other
// 	csp
// }

/*
Windows.System.Profile.AnalyticsInfo.DeviceForm
var {UIViewSettings, UserInteractionMode} = Windows.UI.ViewManagement
var {AnalyticsInfo} = Windows.System.Profile
var {EasClientDeviceInformation} = Windows.Security.ExchangeActiveSyncProvisioning
function getFormFactor() {
	switch (AnalyticsInfo.versionInfo.deviceFamily) {
		case 'Windows.Mobile':
			return 'Phone'
		case 'Windows.Desktop':
			return UIViewSettings.getForCurrentView().UserInteractionMode == UserInteractionMode.Mouse ? 'Desktop' : 'Tablet'
		case 'Windows.Universal':
			return 'IoT'
		case 'Windows.Team':
			return 'SurfaceHub'
		default:
			return 'Other'
	}
}
*/
