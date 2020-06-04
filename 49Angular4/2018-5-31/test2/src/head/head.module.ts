import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HeadComponent} from './head.component';

@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [BrowserModule],
  exports: [HeadComponent]
})

export class HeadModule{
  
}
