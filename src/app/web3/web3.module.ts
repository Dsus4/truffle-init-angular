import { NgModule }    from '@angular/core';

import { Web3Service } from './web3.service';
import { MetaCoinService } from './meta-coin.service';

@NgModule({
  imports: [],
  providers: [ Web3Service, MetaCoinService ],
  exports: []
})
export class Web3Module {}
