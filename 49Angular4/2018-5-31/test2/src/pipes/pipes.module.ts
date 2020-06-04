import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MktimePipe} from './mktime';
import {ParsedatePipe} from './parsedate';

@NgModule({
  declarations: [
    MktimePipe,
    ParsedatePipe
  ],
  imports: [BrowserModule],
  exports: [MktimePipe, ParsedatePipe]
})

export class PipesModule{}
