import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 public cntCaps :any;
  constructor(private obj :StringService) { }

  ngOnInit(): void {
    
    this.cntCaps=this.obj.cntCaptal("PriYanka");
  }


}
