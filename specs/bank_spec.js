var assert = require("assert");
var Bank = require("../bank");


describe("Bank", function(){

  var bank;

  beforeEach(function(){
    var testAccountStub = [{name: "Cyrus", balance: 1000, type: "legit"}];
    bank = new Bank({name: "Legit (honest!) Ltd.", accounts: testAccountStub});
  });

  it("has a name", function(){
    assert.equal("Legit (honest!) Ltd.", bank.name);
  });

  it("can hold accounts", function(){
    assert.equal("Cyrus", bank.accounts[0].name);
  });

  it("can add an account", function(){
    var testAccountStub2 = {name: "Jo", balance: 1, type: "legit"};
    bank.addAccount(testAccountStub2);
    assert.equal("legit", bank.accounts[1].type);
  });

  it("can return a specific account by the account name", function(){
    var testAccountStub2 = {name: "Jo", balance: 1, type: "legit"};
    bank.addAccount(testAccountStub2);
    var returnedAccount = bank.findAccountByName("Jo");
    assert.equal("Jo", returnedAccount.name);
  });



});
