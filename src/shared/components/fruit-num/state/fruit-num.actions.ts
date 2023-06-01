import { createAction } from '@ngrx/store';

export const increment = createAction('[Fruit Num] Increment');
export const decrement = createAction('[Fruit Num] Decrement');
export const reset = createAction('[Fruit Num] Reset');