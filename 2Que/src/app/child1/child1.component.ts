import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public isPrime : any;
  constructor(private obj :NumberService) { }

  ngOnInit(): void {
    this.isPrime=this.obj.chkPrime(10);
  }

}
