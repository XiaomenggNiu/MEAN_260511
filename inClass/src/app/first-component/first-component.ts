import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  imports: [FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent {
  data = 'Miranda';
  disable = false;

  userInput = "Initial Input";

  onClick() {
    this.data = 'Tom';
    this.disable = true;
  }
}
