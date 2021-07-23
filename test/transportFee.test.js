let assert = require("assert");
const transportFee = require("../modules/transportFee");
describe('The transportFee function', function(){
    it ('should return R20 transport fee for a morning shift', function(){
        assert.equal('R20', transportFee('morning'));
    });

    it ('should return R10 transport fee for an afternoon shift', function(){
        assert.equal('R10', transportFee('afternoon'));
    });

    it ('should return "free" transport fee for a nightshift', function(){
        assert.equal('free', transportFee('nightshift'));
    });

});