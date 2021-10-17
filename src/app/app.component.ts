import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
// import { decrement, increment } from './counter/counter.actions';
import * as actions from "./counter/counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reduxProject';
  counter!: number;

  constructor(private store: Store<AppState>) {
    // this.store.subscribe((state) => {
    //   this.counter = state.counter;
    // })
    this.store.select("counter").subscribe((counter) => {
      this.counter = counter;
    });

  }

  increase(): void {
    this.store.dispatch(actions.increment());
  }
  decrease(): void {
    this.store.dispatch(actions.decrement());
  }
}

