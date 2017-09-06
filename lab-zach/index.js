'use strict';

const debug = require('debug')('http:index');
const server = require('./lib/server');
const PORT = process.env.PORT || 3011;

server.listen(PORT, () => debug(`Listening on ${PORT}`));
