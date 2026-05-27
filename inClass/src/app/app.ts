import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { DirectivesIntroComponent } from './directives-intro-component/directives-intro-component';
import { LifecycleIntro } from './lifecycle-intro/lifecycle-intro';
// import {FirstComponent} from './first-component/first-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, DirectivesIntroComponent, LifecycleIntro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('inClass');
  condition = true;

  toggle(){
    this.condition = !this.condition;
  }
}
