import { Component, OnInit } from '@angular/core';

import { MetaCoinService } from './web3/meta-coin.service';

@Component({
  selector: 'meta-coin',
  templateUrl: './meta-coin.component.html',
  styleUrls: [ './meta-coin.component.css' ]
})
export class MetaCoinComponent implements OnInit {
  balance: number;
  status: string = 'Waiting for transactions...';

  constructor(private metaCoinService: MetaCoinService) { }

  ngOnInit(): void {
    this.metaCoinService.init().then((accounts: string[]) => {
      this.refreshBalance();
    });
  }

  sendCoin(amount: number, receiver: string): void {
    let _this = this;

    this.setStatus('Initiating transaction... (please wait)');

    this.metaCoinService.sendCoin(receiver, amount).then((result) => {
      _this.setStatus('Transaction complete!');
      _this.refreshBalance();
      setTimeout(() => { 
        _this.setStatus('Waiting for transactions...');
      }, 3000);
    }).catch(function(e) {
      _this.setStatus('Error sending coin; see log.');
    });
  }

  refreshBalance(): void {
    let _this = this;

    this.metaCoinService.getBalance().then((value) => {
      _this.balance = value.valueOf();
    }).catch(function(e) {
      _this.setStatus('Error getting balance; see log.');
    });
  }

  setStatus(message: string): void {
    this.status = message;
  }
}
