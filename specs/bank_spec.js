var assert = require("assert");
var Bank = require("../bank");


describe("Bank", function(){

  var bank;

  beforeEach(function(){
    var testAccounts = [];
    bank = new Bank({name: "Legit (honest!) Ltd.", accounts: testAccounts});
  });

  it("has a name", function(){
    assert.equal("Legit (honest!) Ltd.", bank.name);
  });

});
