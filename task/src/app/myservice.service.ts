import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  checkcredintials(usrname:string,pswd:string)
  {
    if (usrname == 'navtech'&& pswd == 'navtech'){
return true;
    }
else{
  return false;
}
}
  }


