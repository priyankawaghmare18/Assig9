import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  
  constructor() { }
  public cntCaptal(str:string)
  {
    var cnt :number=0;
    var character :string;
    for(var i=0;i<str.length;i++)
    {
      character=str.charAt(i);
      alert(character);
      if(character==character.toLocaleUpperCase())
    {

           cnt++;

    }


    }
    
return cnt;
  }
}
