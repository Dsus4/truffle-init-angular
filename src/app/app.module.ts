import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Web3Module }       from './web3/web3.module';

import { AppComponent }         from './app.component';
import { MetaCoinComponent }    from './meta-coin.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    Web3Module
  ],
  declarations: [
    AppComponent,
    MetaCoinComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
