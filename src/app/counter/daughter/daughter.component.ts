import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from "../counter.actions"
@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.scss']
})
export class DaughterComponent implements OnInit {
  // @Input() counter!: number;
  // @Output() changeCounter = new EventEmitter<number>();

  counter!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store
      .select("counter")
      .subscribe((counter) => (this.counter = counter));
  }

  duplicate(): void {
    this.store.dispatch(actions.duplicate({ number: 2 }));
  }


  // duplicate() {
  //   this.counter = this.counter * 2;
  //   this.changeCounter.emit(this.counter);
  // }
  // resetGrandDaughter(event: number) {
  //   this.counter = event;
  //   this.changeCounter.emit(this.counter);
  // }

}
