let assert = require("assert");
let greet = require("../modules/isFromBellville");
const isFromBellville = require("../modules/isFromBellville");
describe('The isFromBellville function', function(){
    it('should return true if entered regNumber starts with CY', function(){
        assert.equal(true, isFromBellville('CY 456-74'));
    });
    it('should return false if entered regNumber does not start with CY', function(){
        assert.equal(false, isFromBellville('CA 74658'));
    });
});
