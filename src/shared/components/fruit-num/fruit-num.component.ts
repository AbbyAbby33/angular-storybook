import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './state/fruit-num.actions';

@Component({
    selector: 'app-fruit-num',
    templateUrl: './fruit-num.component.html',
    styleUrls: ['./fruit-num.component.scss']
})
export class FruitNumComponent implements OnInit {
    @Input() name: string = '';
    num$: Observable<number>;

    constructor(
        private store: Store<{ num: number }>
    ) {
        this.num$ = store.pipe(select('num'));
    }

    ngOnInit(): void {
    }

    increment() {
      this.store.dispatch(increment());
    }
   
    decrement() {
      this.store.dispatch(decrement());
    }
   
    reset() {
      this.store.dispatch(reset());
    }

}
