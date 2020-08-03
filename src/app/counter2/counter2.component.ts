import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Decrement, Increment } from '../ngrx';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {

  public counter$: Observable<any>;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(
      select('counterReducer')
    )
  }

  decrement() {
    this.store.dispatch(Decrement())
  }

  increment() {
    this.store.dispatch(Increment())
  }

}
