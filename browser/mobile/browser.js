// SmartPhone.isAndroid = function() {
//     return this.getUserAgent().match(/Android/i);
// };
//
// SmartPhone.isBlackBerry = function() {
//     return this.getUserAgent().match(/BlackBerry/i);
// };
//
// SmartPhone.isBlackBerryPlayBook = function() {
//     return this.getUserAgent().match(/PlayBook/i);
// };
//
// SmartPhone.isBlackBerry10 = function() {
//     return this.getUserAgent().match(/BB10/i);
// };
//
// SmartPhone.isIOS = function() {
//     return this.isIPhone() || this.isIPad() || this.isIPod();
// };
//
// SmartPhone.isIPhone = function() {
//     return this.getUserAgent().match(/iPhone/i);
// };
//
// SmartPhone.isIPad = function() {
//     return this.getUserAgent().match(/iPad/i);
// };
//
// SmartPhone.isIPod = function() {
//     return this.getUserAgent().match(/iPod/i);
// };
//
// SmartPhone.isOpera = function() {
//     return this.getUserAgent().match(/Opera Mini/i);
// };
//
// SmartPhone.isWindows = function() {
//     return this.isWindowsDesktop() || this.isWindowsMobile();
// };
//
// SmartPhone.isWindowsMobile = function() {
//     return this.getUserAgent().match(/IEMobile/i);
// };
//
// SmartPhone.isWindowsDesktop = function() {
//     return this.getUserAgent().match(/WPDesktop/i);
// };
//
// SmartPhone.isFireFox = function() {
//     return this.getUserAgent().match(/Firefox/i);
// };
//
// SmartPhone.isNexus = function() {
//     return this.getUserAgent().match(/Nexus/i);
// };
//
// SmartPhone.isKindleFire = function() {
//     return this.getUserAgent().match(/Kindle Fire/i);
// };
//
// SmartPhone.isPalm = function() {
//     return this.getUserAgent().match(/PalmSource|Palm/i);
// };


/*

var ua  = window.navigator.userAgent,
  device,
  browser,
  data ={};

// get device
if(ua.match(/(iPhone)/)){
  device = 'iPhone';
}else if(ua.match(/(iPad)/)){
  device = 'iPad';
}else if(ua.match(/(iPod)/)){
  device = 'iPod';
}else if(ua.match(/(BlackBerry|BB10)/)){
  device = 'BlackBerry';
}else if(ua.match(/(IEMobile)/)){
  device = 'WindowsMobile';
}else if(ua.match(/(Android)/)){
  device = 'Android';
}else if(ua.match(/(Macintosh)/)){
  device = 'Macintosh';
}else if(ua.match(/(Windows)/)){
  device = 'Windows';
}else if(ua.match(/(Linux)/)){
  device = 'Linux';
}

// get browser
if (ua.indexOf('OPR') > 0 || ua.indexOf('Opera') > 0) {
  browser = 'Opera';
}else if(ua.indexOf('Chrome') > 0){
  browser = 'Chrome';
}else if(ua.indexOf('Firefox') > 0){
  browser = 'Firefox';
}else if(ua.indexOf('Safari') > 0){
  browser = 'Safari';
}else if(ua.indexOf('MSIE') > 0){
  browser = 'IE';
}
*/

/*
INCOGNITO

'use strict';
var isChrome = require('is-chrome');
var fs = typeof window !== 'undefined' &&
	(window.RequestFileSystem || window.webkitRequestFileSystem);

module.exports = function () {
	return new Promise((resolve, reject) => {
		if (isChrome()) {
			if (!fs) {
				reject(-1); // 'Check failed.'
			}
			fs(window.TEMPORARY, 100,
				() => resolve(0), // 'incognito'
				() => reject(1)); // 'not incognito'
		} else {
			reject(-2); // 'Check not implemented for this ENV.'
		}
	});
};
*/
