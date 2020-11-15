import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { changeName, decrement, increment } from 'src/app/state-management/actions/all.actions';

@Component({
  selector: 'app-multiple-states',
  templateUrl: './multiple-states.component.html',
  styleUrls: ['./multiple-states.component.scss']
})
export class MultipleStatesComponent implements OnInit {

  count: Observable<number>;
  name: Observable<string>;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.count = this.store.select('states').pipe(map( (state) => state.count));
    this.name = this.store.select('states').pipe(map( (state) => state.names));
  }

  increment(value) {
    this.store.dispatch(increment());
  }

  decrement(value) {
    this.store.dispatch(decrement());
  }

  changeName(name) {
    this.store.dispatch(changeName({name}));
  }
}
