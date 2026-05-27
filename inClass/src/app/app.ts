import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { DirectivesIntroComponent } from './directives-intro-component/directives-intro-component';
// import {FirstComponent} from './first-component/first-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, DirectivesIntroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('inClass');
}
