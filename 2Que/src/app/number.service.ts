import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public chkPrime(num:number)
  {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
  }
}
