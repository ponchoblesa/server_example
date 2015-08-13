var should = require('should'),
    assert = require('assert'),
    models = require('../../app/handlers');
    
    
    describe('Data handlers', function () {
        it('should be one data handlers for example resource', function (done) {
            models.should.have.property('example');
            done();
        });
    });
    