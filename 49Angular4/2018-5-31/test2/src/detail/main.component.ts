import {Component} from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  inputs: ['data']
})

export class MainComponent{
  private data: Object;
}
