import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent {
  data = 'Miranda';


  onClick(){
    this.data = "Tom";
  }


}
