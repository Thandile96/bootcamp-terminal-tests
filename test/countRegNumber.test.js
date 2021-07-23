let assert = require("assert");
const countRegNumber = require("../modules/countRegNumber")
describe('The countRegNumber function', function(){
    it('should return the total of registration numbers in the string', function(){
        assert.equal(4, countRegNumber('CA 182736,CY 523519,CJ 812328, CA 85684'));
    });

    it('should return the total of registration numbers in the string', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CL 74696'));
    });

    it('should return the total of registration numbers in the string', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
})