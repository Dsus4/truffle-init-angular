import { Injectable }         from '@angular/core';

import { Web3 }               from 'web3';
import * as truffleContract   from 'truffle-contract';

const url: string = 'http://localhost:8545';

@Injectable()
export class Web3Service {
	web3: Web3;
  accounts: string[];
  defaultAccount: string;

  constructor() {
  	if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider(url));
    }
  }

  init(): Promise<string[]> {
    return this.fetchAccounts();
  } 

  compileContract(contractAbi) {
    let contract = truffleContract(contractAbi);
    contract.setProvider(this.web3.currentProvider);
    return contract;
  }

  fetchAccounts(): Promise<string[]> {
    let _this = this;
    return new Promise((resolve, reject) => {
      _this.web3.eth.getAccounts((err, accounts) => {
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
  }

  getAccounts(): string[] {
    return this.accounts;
  }

  getDefaultAccount(): string {
    return this.defaultAccount;
  }
}
