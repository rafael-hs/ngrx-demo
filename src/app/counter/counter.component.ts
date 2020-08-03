import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable, timer } from 'rxjs';
import { Decrement, Increment } from '../ngrx';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

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
