let assert = require("assert");
const regCheck = require("../modules/regCheck");
describe('The regCheck function', function(){
    it('should check if a regNumber is for GP and return true if registration number for GP includes location', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });

    it('should check if a regNumber is for MP and should return true if registration number for GP includes location', function(){
        assert.equal(true, regCheck('DV 23 LP MP', 'MP'));
    });

    it('should check if a regNumber is for CY and return false if registration number does not include location', function(){
        assert.equal(false, regCheck('CY 189-012', 'ND'));
    });
});
