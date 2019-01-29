import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  checkIfWorking(){
    return console.log('Yes its working!');
  }
}
