import { Component, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public onomatopias : string[]
  constructor() {
    this.onomatopias = []
  }


  onReceiveNewOnomatopia(value:  string) {
    this.onomatopias.push(value)
    
  }
}
