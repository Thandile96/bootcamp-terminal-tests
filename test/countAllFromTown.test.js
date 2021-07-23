let assert = require("assert");
const countAllFromTown = require("../modules/countAllFromTown");
describe('The countAllFromTown function', function(){
    it('should return registration numbers for Stellies(CL)', function(){
        assert.deepEqual(['CL 124','CL 345','CL 341'], countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('should return registration numbers for Kuilsriver(CF)', function(){
        assert.deepEqual(['CF 784'], countAllFromTown('CF 784,CY 567,CL 345, CJ 456,CL 341','CF'));
    });
});