import {Component} from '@angular/core';

@Component({
  selector: 'right',
  templateUrl: './right.component.html',
  inputs: ['data']
})

export class RightComponent{
  private data: Object;
}
