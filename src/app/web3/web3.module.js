"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web3_service_1 = require("./web3.service");
var meta_coin_service_1 = require("./meta-coin.service");
var Web3Module = (function () {
    function Web3Module() {
    }
    return Web3Module;
}());
Web3Module = __decorate([
    core_1.NgModule({
        imports: [],
        providers: [web3_service_1.Web3Service, meta_coin_service_1.MetaCoinService],
        exports: []
    })
], Web3Module);
exports.Web3Module = Web3Module;
//# sourceMappingURL=web3.module.js.map