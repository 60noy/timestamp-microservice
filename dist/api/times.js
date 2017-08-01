'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var times = function times(router) {
  router.get('/', function (req, res) {
    res.json({ 'data': 'Yo' });
  });
};

exports.default = times;
//# sourceMappingURL=times.js.map