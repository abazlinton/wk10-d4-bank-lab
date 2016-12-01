var assert = require("assert");
var Account = require("../account");

describe("Account", function(){

  var account;

  beforeEach(function(){
    account = new Account({balance: 100, name: "Alex"});
  });

  it("has a balance", function(){
    assert.equal(100, account.balance);
  });
});
