var assert = require("assert");
var Bank = require("../bank");


describe("Bank", function(){

  var bank;

  beforeEach(function(){
    var testAccounts = [{name: "Cyrus", balance: 1000, type: "legit"}];
    bank = new Bank({name: "Legit (honest!) Ltd.", accounts: testAccounts});
  });

  it("has a name", function(){
    assert.equal("Legit (honest!) Ltd.", bank.name);
  });

  it("can hold accounts", function(){
    assert.equal("Cyrus", bank.accounts[0].name);
  });



});
