let assert = require("assert");
const countAllPaarl = require("../modules/countAllPaarl");
describe('The countAllPaarl function', function(){
    it('should return registration numbers for Paarl(CJ)', function(){
        assert.deepEqual(['CJ 678 543','CJ 67890' ], countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });
    it('should return registration numbers for Paarl(CJ)', function(){
        assert.deepEqual(['CJ 900','CJ 678 543','CJ 67890'], countAllPaarl('CJ 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });
    it('should return registration numbers for Paarl(CJ)', function(){
        assert.deepEqual([], countAllPaarl('CL 900, CF 678 543, CA 34567, CL 67890, CN 7864'));
    });
   
});



