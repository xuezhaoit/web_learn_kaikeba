import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})

export class DetailComponent{
  private id: string;
  private data: Object;

  constructor(private http: Http, private route: ActivatedRoute){
    this.id=this.route.snapshot.params.id;
  }

  ngOnInit(){
    this.http.get(`http://localhost:8090/detail?id=${this.id}`).forEach(res=>{
      this.data=res.json();
    });
  }
}
