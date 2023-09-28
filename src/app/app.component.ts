import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-app';
  oddNumbers : number[] = [];
  evenNumbers: number[] = [];

  onIntervalEvent(nombreEmit: number) {
    if(nombreEmit % 2 == 0) {
      this.evenNumbers.push(nombreEmit);
    } else {
      this.oddNumbers.push(nombreEmit);
    }
    console.log("Pere : " + nombreEmit);
  }
}
