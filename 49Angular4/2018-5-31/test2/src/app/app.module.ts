import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HeadModule} from '../head/head.module';
import {FootModule} from '../foot/foot.module';
import {ListModule} from '../list/list.module';
import {DetailModule} from '../detail/detail.module';
import {PipesModule} from '../pipes/pipes.module';

import routes from '../routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    HeadModule,
    FootModule,
    ListModule,
    DetailModule,

    PipesModule,

    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
