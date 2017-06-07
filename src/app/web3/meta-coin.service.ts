import { Injectable } from '@angular/core';

import { Web3Service } from './web3.service';

import metaCoinAbi from './contracts/MetaCoin.abi';


@Injectable()
export class MetaCoinService extends Web3Service {
  contract: any;

  constructor() {
    super();
    this.contract = super.compileContract(metaCoinAbi);
  }

  init(): Promise<string[]> {
    return super.init();
  }

  getInstance(): Promise<any> {
    return this.contract.deployed();
  }

  sendCoin(receiver: string, amount: number): Promise<any> {
    let account: string = super.getDefaultAccount();
    return this.getInstance().then((instance) => {
      return instance.sendCoin(receiver, amount, {from: account});
    }).catch((err) => {
      console.error('Error sending Coin: ', err);
    });
  }

  getBalance(): Promise<any> {
    let account: string = super.getDefaultAccount();
    return this.getInstance().then((instance) => {
      return instance.getBalance.call(account, {from: account});
    }).catch((err) => {
      console.error('Error getting balance: ', err);
    });
  }
}
