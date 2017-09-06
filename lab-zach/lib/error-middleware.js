'use strict';


//I believe this will help us create error objects via Node.
const createError = require('http-errors');
const debug = require('debug')('http:error-middleware');

//exporting...
// error first, then request and response. next to move to next thing in stack
module.exports = function (err, req, res, next) {

  if (err.status) {
    //this will kick off if the error is user related
    debug('user error');

    //this will send back the status number and info
    res.status(err.status).send(err.name);
    next();

    //I'm still not sure why we have to explicitly return in the if..
    return;
  }

  //this will kick off if it's on the server side
  debug('server error');

  //this will create the error object 500 explicitly
  err = createError(500, err.message);

  //this will return the the response of the created error object
  res.status(err.status).send(err.name);

  //next pushing us along..
  next();

  // for some reason this is implicit return...
};
