import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DetailComponent} from './detail.component';
import {MainComponent} from './main.component';
import {RightComponent} from './right.component';

@NgModule({
  declarations: [
    DetailComponent,
    MainComponent,
    RightComponent,

  ],
  imports: [BrowserModule],
  exports: [DetailComponent],
  bootstrap: [DetailComponent]
})

export class DetailModule{}
