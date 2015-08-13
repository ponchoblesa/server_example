var should = require('should'),
    assert = require('assert'),
    exampleModel = require('../../app/models/example');
    
    
    describe('Example model', function () {
        it('should exist', function (done) {
            should.exist(exampleModel);
            done();
        });
    });
    