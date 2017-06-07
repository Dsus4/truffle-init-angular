"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web3_1 = require("web3");
var truffleContract = require("truffle-contract");
var url = 'http://localhost:8545';
var Web3Service = (function () {
    function Web3Service() {
        if (typeof this.web3 !== 'undefined') {
            this.web3 = new web3_1.Web3(this.web3.currentProvider);
        }
        else {
            this.web3 = new web3_1.Web3(new web3_1.Web3.providers.HttpProvider(url));
        }
    }
    Web3Service.prototype.init = function () {
        return this.fetchAccounts();
    };
    Web3Service.prototype.compileContract = function (contractAbi) {
        var contract = truffleContract(contractAbi);
        contract.setProvider(this.web3.currentProvider);
        return contract;
    };
    Web3Service.prototype.fetchAccounts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.web3.eth.getAccounts(function (err, accounts) {
                if (err) {
                    console.error('There was an error fetching your accounts: ', err);
                    reject(err);
                }
                if (accounts.length == 0) {
                    console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                }
                _this.accounts = accounts;
                _this.defaultAccount = accounts[0];
                resolve(accounts);
            });
        });
    };
    Web3Service.prototype.getAccounts = function () {
        return this.accounts;
    };
    Web3Service.prototype.getDefaultAccount = function () {
        return this.defaultAccount;
    };
    return Web3Service;
}());
Web3Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Web3Service);
exports.Web3Service = Web3Service;
//# sourceMappingURL=web3.service.js.map