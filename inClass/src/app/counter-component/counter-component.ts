import { Component, inject, signal } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { increment } from './state/actions';
import { CommonModule } from '@angular/common';
import { selectCount } from './state/selector';
import { userUpdate } from './state/user-actions';

@Component({
  selector: 'app-counter-component',
  imports: [CommonModule],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss',
})
export class CounterComponent {
  private store = inject(Store);
  // count = this.store.select((state)=>state.counter.count);
  count = this.store.select(selectCount);
  username = this.store.select((state)=>state.user.username)

  onClick(){
    this.store.dispatch(increment());
  }

  onChange(e: Event){
    this.store.dispatch(userUpdate({username: (<HTMLInputElement>e.target).value}))
  }


  // count = signal<number>(0);

  // onClick(){
  //   this.count.update(val=> val+1)
  // }

}
