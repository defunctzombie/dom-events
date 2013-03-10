var test = require('tape');
var eve = require('./');

test('on', function(assert) {
    var div = document.createElement('div');
    eve.on(div, 'click', function(ev) {
        assert.ok(ev);
        assert.end();
    })

    eve.emit(div, 'click');
});

test('off', function(assert) {
    var div = document.createElement('div');

    var fn = function(ev) {
        assert.ok(ev);

        eve.off(div, 'click', fn);
        eve.emit(div, 'click');
        assert.end();
    };

    eve.on(div, 'click', fn);
    eve.emit(div, 'click');
});
