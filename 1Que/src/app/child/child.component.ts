import { Component, OnInit } from '@angular/core';
import {ArithmaticService} from '../arithmatic.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public resAdd :any;
  public resSub:any;
  constructor(private obj:ArithmaticService) { }

  ngOnInit(): void {
   // this.resAdd=this.obj.add().subscribe(data=>this.Batches=data);
   this.resAdd = this.obj.add();
   this.resSub = this.obj.sub();
  }
  

}
