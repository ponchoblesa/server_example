var should = require('should'),
    assert = require('assert'),
    exampleModel = require('../../app/handlers/example');
    
    
    describe('Example handler', function () {
        it('should exist', function (done) {
            should.exist(exampleModel);
            done();
        });
    });
    