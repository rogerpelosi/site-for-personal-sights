import { Component, Inject } from '@angular/core';
// import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roger-pelosi';
  // constructor(@Inject(APP_BASE_HREF) private baseHref:string) {
  //   var a = this.baseHref;
  //   console.log(a, "is base HREF");
  // }
}
