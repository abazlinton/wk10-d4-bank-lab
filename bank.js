var Bank = function(params) {
  this.name = params.name;
  this.accounts = [];
  this.accounts = params.accounts;
};

Bank.prototype= {
  addAccount: function(account){
    this.accounts.push(account);
  }
};












module.exports = Bank;
