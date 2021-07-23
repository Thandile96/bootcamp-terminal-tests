let assert = require("assert");
const mostProfitableDepartment = require("../modules/mostProfitableDepartment")
describe('The mostProfitableDepartment function', function(){
    it ('should return the most profitable department in the shop', function(){
        assert.deepEqual('hardware', 
        mostProfitableDepartment([
            {department : 'hardware', sales : 114500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},  
        ]));
    
    });

    it ('should return the most profitable department in the shop', function(){
        assert.deepEqual('outdoor', 
        mostProfitableDepartment([
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},  
        ]));

        it ('should return the most profitable department in the shop', function(){
            assert.deepEqual('carpentry', 
            mostProfitableDepartment([
                {department : 'hardware', sales : 500, day : 'Monday'},
                {department : 'outdoor', sales : 100, day : 'Monday'},
                {department : 'carpentry', sales : 15500, day : 'Monday'},
                {department : 'hardware', sales : 700, day : 'Tuesday'},
                {department : 'outdoor', sales : 1005, day : 'Tuesday'},
                {department : 'carpentry', sales : 1540, day : 'Tuesday'},
                {department : 'hardware', sales : 1500, day : 'Wednesday'},
                {department : 'outdoor', sales : 2507, day : 'Wednesday'},
                {department : 'carpentry', sales : 8009, day : 'Wednesday'},
                {department : 'hardware', sales : 1000, day : 'Thursday'},
                {department : 'outdoor', sales : 8007, day : 'Thursday'},
                {department : 'carpentry', sales : 36109, day : 'Thursday'},
                {department : 'hardware', sales : 3005, day : 'Friday'},
                {department : 'outdoor', sales : 1006, day : 'Friday'},
                {department : 'carpentry', sales : 86109, day : 'Friday'},  
            ]));
        
        });
    
    
    });


});