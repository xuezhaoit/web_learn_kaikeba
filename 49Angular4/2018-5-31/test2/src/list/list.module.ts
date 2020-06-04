import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ListComponent} from './list.component';
import {EditorRecommendComponent} from './editor-recommend.component';
import {HighProjectsComponent} from './high-projects.component';
import {ListConComponent} from './list-con.component';
import {ListItemComponent} from './list-item.component';
import {LeftComponent} from './left.component';
import {RightComponent} from './right.component';

@NgModule({
  declarations: [
    ListComponent,
    EditorRecommendComponent,
    HighProjectsComponent,
    ListConComponent,
    ListItemComponent,
    LeftComponent,
    RightComponent,
  ],
  imports: [BrowserModule],
  exports: [ListComponent]
})

export class ListModule{

}
