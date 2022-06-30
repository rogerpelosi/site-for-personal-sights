import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
// import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { HomeComponent } from './components/home/home.component';
import { PenComponent } from './components/pen/pen.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { HandsComponent } from './components/hands/hands.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'pen',
    component: PenComponent
  },
  {
    path: 'hands',
    component: HandsComponent
  },
  {
    path: 'keyboard',
    component: KeyboardComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PenComponent,
    KeyboardComponent,
    HandsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers:[], //[{provide: APP_BASE_HREF, useValue: '/roger-pelosi'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
