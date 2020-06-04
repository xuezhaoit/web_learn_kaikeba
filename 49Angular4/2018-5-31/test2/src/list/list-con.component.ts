import {Component} from '@angular/core';
import {Http} from '@angular/http';
import config from '../config';

@Component({
  selector: 'list-con',
  templateUrl: './list-con.component.html'
})

export class ListConComponent{
  private list_data;

  constructor(private http: Http){
    this.http.get(`${config.API_ROOT}/list`).toPromise().then(res=>{
      this.list_data=res.json();
    }, err=>{
      alert('读取数据失败，请刷新重试');
    });
  }
}
