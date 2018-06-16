'use strict';

const getGlobalObject = () => {
  if (typeof self !== 'undefined' && self.self === self &&
    self.Array === Array && self.setInterval === setInterval) {
    return self;
  }
  if (typeof window !== 'undefined' && window.window === window &&
    window.Array === Array && window.setInterval === setInterval) {
    return window;
  }
  if (typeof global !== 'undefined' && global.global === global &&
    global.Array === Array && global.setInterval === setInterval) {
    return global;
  }
  throw new Error('Cannot find the global object');
};

module.exports = getGlobalObject();

/*
Returns the global object in Node or in the browser, including the web worker.

Hopefully it will no longer be needed when the TC39 global proposal is implemented, see:

https://github.com/tc39/proposal-global
http://littledan.github.io/global.html
Problems with Function()
The only reliable way to get the global object is:

const theGlobalObject = Function('return this')();
but it breaks the Chrome App Content Security Policy, see:

https://github.com/paulmillr/es6-shim/issues/301
How this module works
This module checks to see if there is a global variable called self, window or global and returns the first one that has a reference to itself with the same name, as a real global object would, with some additional checks.

This is important to not return a wrong object if there happens to be a global variable called self or window defined, but it's not the global object itself.

This module does the following checks to make sure that:

the object has a circular reference to itself with the correct name
the object has properties Array and setInterval equal to the global ones
The Array and setInterval are chosen arbitrarily as examples of names that are unlikely to be there by accident and that are guaranteed to be present on the global object as required by the language specification.


*/
