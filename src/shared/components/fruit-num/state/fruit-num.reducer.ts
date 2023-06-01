import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './fruit-num.actions';

export const initialState = 0;

const _fruitNumReducer = createReducer(initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, state => 0),
);

export function fruitNumReducer(state: any, action: any) { //TODO: 型別
    return _fruitNumReducer(state, action);
}