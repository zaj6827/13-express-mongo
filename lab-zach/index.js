'use strict';

const debug = require('debug')('http:index');
const server = require('./lib/server');
const PORT = process.env.PORT || 3021;

server.listen(PORT, () =>{debug('Server is listening..');});
