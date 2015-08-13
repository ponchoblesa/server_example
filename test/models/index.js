var should = require('should'),
    assert = require('assert'),
    models = require('../../app/models');
    
    
    describe('Data models', function () {
        it('should be one data model for example resource', function (done) {
            models.should.have.property('example');
            done();
        });
    });
    