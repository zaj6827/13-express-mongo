'use strict';

//These are the headers to prevent cors issues.
module.exports = function(req, res, next) {
  //This !!IS!! Caps sensitive, so keep that in mind.
  res.append('Allow-Access-Control-Origin', '*');
  //The second arguement, '*', is just the universal symbol, this can be changed to disallow permission..
  res.append('Allow-Access-Control-Headers', '*');
  // Lastly, next passes it off to the next thing in queue I believe.
  next();
};
