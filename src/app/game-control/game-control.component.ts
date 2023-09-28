import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  intervalID: number;
  increment: number = 0;
  @Output() intervalEvent: EventEmitter<number> = new EventEmitter<number>();
  onStartGame() {
    this.intervalID = setInterval(() => {
      this.intervalEvent.emit(this.increment + 1)
      this.increment++;
      console.log("Fils : " + this.increment)
    },1000)
  }

  onStopGame() {
    clearInterval(this.intervalID);
  }
}
