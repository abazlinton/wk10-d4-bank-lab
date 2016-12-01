var Bank = function(params) {
  this.name = params.name;
  this.accounts = [];
  this.accounts = params.accounts;
};

Bank.prototype= {
  addAccount: function(account){
    this.accounts.push(account);
  },

  findAccountByName: function(name){
    var foundAccount = this.accounts.find(function(accountElement){
      return accountElement.name === name;
    });
    return foundAccount;
  }
};




module.exports = Bank;
