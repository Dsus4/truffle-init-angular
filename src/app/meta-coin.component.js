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
var meta_coin_service_1 = require("./web3/meta-coin.service");
var MetaCoinComponent = (function () {
    function MetaCoinComponent(metaCoinService) {
        this.metaCoinService = metaCoinService;
        this.status = 'Waiting for transactions...';
    }
    MetaCoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaCoinService.init().then(function (accounts) {
            _this.refreshBalance();
        });
    };
    MetaCoinComponent.prototype.sendCoin = function (amount, receiver) {
        var _this = this;
        this.setStatus('Initiating transaction... (please wait)');
        this.metaCoinService.sendCoin(receiver, amount).then(function (result) {
            _this.setStatus('Transaction complete!');
            _this.refreshBalance();
            setTimeout(function () {
                _this.setStatus('Waiting for transactions...');
            }, 3000);
        }).catch(function (e) {
            _this.setStatus('Error sending coin; see log.');
        });
    };
    MetaCoinComponent.prototype.refreshBalance = function () {
        var _this = this;
        this.metaCoinService.getBalance().then(function (value) {
            _this.balance = value.valueOf();
        }).catch(function (e) {
            _this.setStatus('Error getting balance; see log.');
        });
    };
    MetaCoinComponent.prototype.setStatus = function (message) {
        this.status = message;
    };
    return MetaCoinComponent;
}());
MetaCoinComponent = __decorate([
    core_1.Component({
        selector: 'meta-coin',
        templateUrl: './meta-coin.component.html',
        styleUrls: ['./meta-coin.component.css']
    }),
    __metadata("design:paramtypes", [meta_coin_service_1.MetaCoinService])
], MetaCoinComponent);
exports.MetaCoinComponent = MetaCoinComponent;
//# sourceMappingURL=meta-coin.component.js.map