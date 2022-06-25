import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }
public add() :any//:Observable<IBatches>
{
var a :number=1,b :number=2;
return a+b;
}
public sub():any //:Observable<IBatches>
{
var a :number=2,b :number=1;
return a-b;
}
}
