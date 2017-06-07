"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var web3_service_1 = require("./web3.service");
var MetaCoin_abi_1 = require("./contracts/MetaCoin.abi");
var MetaCoinService = (function (_super) {
    __extends(MetaCoinService, _super);
    function MetaCoinService() {
        var _this = _super.call(this) || this;
        _this.contract = _super.prototype.compileContract.call(_this, MetaCoin_abi_1.default);
        return _this;
    }
    MetaCoinService.prototype.init = function () {
        return _super.prototype.init.call(this);
    };
    MetaCoinService.prototype.getInstance = function () {
        return this.contract.deployed();
    };
    MetaCoinService.prototype.sendCoin = function (receiver, amount) {
        var account = _super.prototype.getDefaultAccount.call(this);
        return this.getInstance().then(function (instance) {
            return instance.sendCoin(receiver, amount, { from: account });
        }).catch(function (err) {
            console.error('Error sending Coin: ', err);
        });
    };
    MetaCoinService.prototype.getBalance = function () {
        var account = _super.prototype.getDefaultAccount.call(this);
        return this.getInstance().then(function (instance) {
            return instance.getBalance.call(account, { from: account });
        }).catch(function (err) {
            console.error('Error getting balance: ', err);
        });
    };
    return MetaCoinService;
}(web3_service_1.Web3Service));
MetaCoinService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MetaCoinService);
exports.MetaCoinService = MetaCoinService;
//# sourceMappingURL=meta-coin.service.js.map