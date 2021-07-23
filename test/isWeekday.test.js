let assert = require("assert");
const isWeekday = require("../modules/isWeekday");
describe('The isWeekday function', function(){
    it('should check if a day is a weekday and return true if day starts with M or T or W or F', function(){
        assert.equal(true, isWeekday('Thursday'));
    });

    it('should check if a day is a weekday and return true if day starts with M or T or W or F', function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('should check if a day is a weekday and return false if day does not start with M or T or W or F', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
   
});