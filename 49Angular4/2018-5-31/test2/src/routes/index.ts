import {Routes, RouterModule} from '@angular/router';

import {ListComponent} from '../list/list.component';
import {DetailComponent} from '../detail/detail.component';

const routes: Routes=[
  {path: '', component: ListComponent},
  {path: 'article/:id', component: DetailComponent}
];

export default RouterModule.forRoot(routes)
