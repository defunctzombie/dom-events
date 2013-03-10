# eve

DOM event binding and triggering

## api

### eve.on(element, name, fn [, useCapture])

Bind `fn` to be called when `name` is triggered on `element`.

```js
var eve = require('eve');

var div = document.createElement('div');
eve.on(div, 'click', function(ev) {
    console.log(ev);
});
```

### eve.off(element, name, fn [, useCapture])

Remove `fn` from being called when `name` is triggered on `element`

```js
var eve = require('eve');

var fn = function(ev) {
    console.log(ev);
};

var div = document.createElement('div');
eve.on(div, 'click', fn);

// emit some stuff

eve.off(div, 'click', fn);
```

### eve.emit(element, name [, opts])

Force emit `name` on `element`.

```js
var eve = require('eve');

var div = document.createElement('div');
eve.on(div, 'click', function(ev) {
    console.log(ev);
});

eve.emit(div, 'click'):
```

## license

MIT

