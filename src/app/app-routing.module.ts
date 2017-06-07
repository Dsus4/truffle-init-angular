import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetaCoinComponent }   	from './meta-coin.component';

const routes: Routes = [
  { path: '', redirectTo: '/meta-coin', pathMatch: 'full' },
  { path: 'meta-coin',  component: MetaCoinComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
