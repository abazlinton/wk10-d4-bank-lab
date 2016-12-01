var assert = require("assert");
var Account = require("../account");

describe("Account", function(){

  var account;

  beforeEach(function(){
    account = new Account({balance: 100, name: "Alex", type: "laundering"});
  });

  it("has a balance", function(){
    assert.equal(100, account.balance);
  });

  it("has a named account holder", function(){
    assert.equal("Alex", account.name);
  });

  it("has a type", function(){
    assert.equal("laundering", account.type);
  });

});
