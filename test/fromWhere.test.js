let assert = require("assert");
const fromWhere = require("../modules/fromWhere");
describe('The fromWhere function', function(){
    it ('should return the name of the town where the entered registration is from', function(){
        assert.equal('Bellville', fromWhere('CY 78952'));
    });
    it ('should return the name of the town where the entered registration is from', function(){
        assert.equal('Paarl', fromWhere('CJ 452-14'));
    });
    it ('should return "Some other place!" if the entered registration number does not start with CY, CJ or CA', function(){
        assert.equal('Some other place!', fromWhere('CX 72-7411'));
    });

});