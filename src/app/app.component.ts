import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>{{title}}</h1>
      </div>
      <div class="bs-component">
        <ul class="nav nav-tabs" style="margin-bottom: 15px;">
          <li>
            <a routerLink="/meta-coin" routerLinkActive="active" aria-expanded="false">Meta Coin<div class="ripple-container"></div></a>
          </li>
        </ul>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Truffle Angular integration';
}
