```js

  // @TODO: add checks for different types of frames

  /*

    // If the page is the only page being displayed, top, parent, self and window will be equal
    // If the page is being held within a frameset, self and top will not be equal
    // If the page is the page containing the frameset, and it itself is not being held within a frameset,
    // self and top will be equal

    window.opener // refers to the window that called window.open( ... ) to open the window from which it's called
    window.parent // refers to the parent of a window in a <frame> or <iframe>
    window.top // refers to the top-most window from a window nested in one or more layers of <iframe> sub-windows
    window.frames // collection of framed windows?
    window.frames[nameOrNumberOfFrame].window // Refers to a frame or iframe held by the current page

    if( self != top ) { top.location.href = self.location.href }

    parent.frames.otherframename // in <frame name="nameOfFrame">
    parent.frames[2] // (assuming 2 is the index of the frame)
    parent.otherframename


           unnamed frame (main.html)
       ____________|____________
      |                         |
    left (links.html)         right (inner.html)
                      __________|______________
                     |                         |
                  banner (upper.html)      mainpart (lower.html)


    If a script were running in main.html, it would be able to reference the window and document objects of lower.html
    using this:

    window.frames['right'].frames['mainpart']
    window.frames['right'].frames['mainpart'].document
    If a script were running in lower.html, it would be able to reference the window object of links.html using either of these:

    window.parent.parent.frames['left']
    window.top.frames['left']
    Attempting to access the contents of a frame before they have loaded will cause an error. In all browsers, the window object will not exist for that frame unless the page has loaded.

    if( !window.frames['nameOfFrame'] ) { window.alert( 'Frame has not loaded' ); }
    This algorithm also works with iframes, without requiring any changes.

  */
```
