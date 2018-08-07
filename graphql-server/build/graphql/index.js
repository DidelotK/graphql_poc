'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('graphql-tools/dist/index');

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _index.makeExecutableSchema)({
  typeDefs: _types2.default,
  resolvers: _resolvers2.default
});
//# sourceMappingURL=index.js.map