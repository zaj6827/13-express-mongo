'use strict';

const Toy = require('../model/toy');
const debug = require('debug')('http:route-toy');

module.exports = function(router) {
  router.post('/api/toy', (req, res, next) => {
    debug('/api/toy POST');

    return new Toy(req.body).save()
      .then(toy => res.status(201).json(toy))
      .catch(err => next(err));
  });

  router.get('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy/:_id GET');

    return Toy.findById(req.params._id)
      .then(toy => res.json(toy))
      .catch(next);
  });

  router.get('/api/toy', (req, res, next) => {
    debug('/api/toy GET');
    //TODO Change this fetchall to work with mongodb.
    return Toy.find()
      .then(toy => res.json(toy))
      .catch(next);
  });

  router.put('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy PUT');
    //TODO Update an existing item in  mongodb schema
    return Toy.findByIdAndUpdate(req.params._id, req.body)
      .then(toy => res.json(toy))
      .catch(next);
  });
  router.delete('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy DELETE');
    //TODO Get rid of an item that exists in mongodb.
    return Toy.findById(req.params._id).remove()
      .then(toy => res.json(toy))
      .catch(next);
  });
};
//
// };
