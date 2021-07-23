let assert = require("assert");
const yearsAgo = require("../modules/yearsAgo");
describe('The yearsAgo function', function(){
    it('should return how many years ago that specific year is from the current year', function(){
        assert.equal(9, yearsAgo(2012));
    });

    it('should return how many years ago that specific year is from the current year', function(){
        assert.equal(19, yearsAgo(2002));
    });
});