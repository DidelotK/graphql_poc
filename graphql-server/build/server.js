'use strict';

require('babel-polyfill');

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _apolloServerExpress = require('apollo-server-express');

var _index = require('./graphql/index');

var _index2 = _interopRequireDefault(_index);

var _default = require('./configs/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

if (app.get('env') === 'development') {
  // Configure env for development
  _dotenv2.default.config();
}

var PORT = process.env.SERVER_PORT || _default2.default.SERVER_PORT;

app.use((0, _morgan2.default)('combined'));

// bodyParser is needed just for POST.
app.use('/graphql', (0, _cors2.default)(), _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _index2.default }));

if (process.env.NODE_ENV === 'development') {
  app.get('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));
}

console.log(app.get('env'));
console.log('Server running at: http://' + _os2.default.hostname() + ':' + PORT);

app.listen(PORT);
//# sourceMappingURL=server.js.map