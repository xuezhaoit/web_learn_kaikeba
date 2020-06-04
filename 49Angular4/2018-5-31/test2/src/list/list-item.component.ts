import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  inputs: ['data']
})

export class ListItemComponent{
  private data;

  constructor(){

  }

  ngOnInit(){
    //console.log(this.data);
  }
}
