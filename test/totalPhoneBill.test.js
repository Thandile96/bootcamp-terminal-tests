let assert = require("assert");
const totalPhoneBill = require("../modules/totalPhoneBill");
describe('The totalPhoneBill function', function(){
    it('should return the total cost for the calls and smses made', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return the total cost for the calls and smses made', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('should return the total cost for the calls and smses made', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});