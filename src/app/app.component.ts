import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number:number;
  constructor(){
    this.number=1;
  }
  increment(){
    this.number++;
  }
  decrement(){
    this.number--;
  }
}
