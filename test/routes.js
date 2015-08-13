var should = require('should'),
    assert = require('assert'),
    request = require('supertest'),
    mongoose = require('mongoose'),
    config = require('../config')();

describe('routing', function() {
  var port = process.env.PORT || 3000,
      host = process.env.IP || "localhost",
      url = 'http://'+ host + ':'+ port;
      
  before(function(done) {
    mongoose.connect(config.db.mongodb);                            
    done();
  });
  
  describe('example', function() {
    it('should be possible to retrieve all the examples', function(done) {
        request(url).get('/api/examples').end(function (err, res) {
          if (err) {
            throw err;
          }
          res.should.have.property('status', 200);
          done();
        });
    });
  });
});