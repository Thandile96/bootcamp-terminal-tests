let assert = require("assert");
const findItemsOver = require("../modules/findItemsOver");
describe('The findItemsOver function', function(){
    it('should return products that have a quantity higher than 15 which is the threshold', function(){
        assert.deepEqual([{name : 'pears', qty : 19},{name : 'bananas', qty : 17}],
        findItemsOver([{name : 'apples', qty : 10},
                       {name : 'pears', qty : 19},
                       {name : 'bananas', qty : 17},
                       {name : 'apples', qty : 3}],15));
    });

    it('should return products that are higher than 25 which is the threshold', function(){
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'apples', qty : 37}],
         findItemsOver([{name : 'apples', qty : 40},
                        {name : 'bananas', qty : 23},
                        {name : 'apples', qty : 37}],25));
    });
});