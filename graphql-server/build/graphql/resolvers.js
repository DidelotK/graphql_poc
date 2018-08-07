'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  Query: {
    books: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj, args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _index2.default.books.sync();

              case 2:
                _context.next = 4;
                return _index2.default.books.findAll({
                  where: args
                });

              case 4:
                return _context.abrupt('return', _context.sent);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      function books(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return books;
    }(),
    films: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(obj, args) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _index2.default.films.sync();

              case 2:
                _context2.next = 4;
                return _index2.default.films.findAll({
                  where: args
                });

              case 4:
                return _context2.abrupt('return', _context2.sent);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      function films(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return films;
    }(),
    multimedia: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var resMultimedia;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all([_index2.default.books.sync(), _index2.default.films.sync()]);

              case 2:
                _context3.next = 4;
                return Promise.all([_index2.default.books.findAll(), _index2.default.films.findAll()]);

              case 4:
                resMultimedia = _context3.sent;
                return _context3.abrupt('return', [].concat(_toConsumableArray(resMultimedia[0]), _toConsumableArray(resMultimedia[1])));

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      function multimedia() {
        return _ref3.apply(this, arguments);
      }

      return multimedia;
    }()
  },
  Mutation: {
    addBook: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(obj, _ref4) {
        var title = _ref4.title,
            author = _ref4.author;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _index2.default.books.create({
                  title: title,
                  author: author
                });

              case 3:
                return _context4.abrupt('return', 'Book created');

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', 'Error during book creation: ' + _context4.t0);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined, [[0, 6]]);
      }));

      function addBook(_x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return addBook;
    }(),
    addFilm: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(obj, _ref6) {
        var title = _ref6.title,
            director = _ref6.director;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _index2.default.films.create({
                  title: title,
                  director: director
                });

              case 3:
                return _context5.abrupt('return', 'Film created');

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', 'Error during film creation: ' + _context5.t0);

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined, [[0, 6]]);
      }));

      function addFilm(_x7, _x8) {
        return _ref7.apply(this, arguments);
      }

      return addFilm;
    }()
  },
  Multimedia: {
    __resolveType: function __resolveType(obj, context, info) {
      return obj.dataValues.hasOwnProperty('author') ? 'Book' : 'Film';
    }
  }
};
//# sourceMappingURL=resolvers.js.map