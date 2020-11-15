import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment } from '../actions/all.actions';

const initialState = 0;

const _countReducer = createReducer(
    initialState,
    on(increment, (state) => state += 1),
    on(decrement, (state) => state -= 1)
);

export const countReducer = (state: number, action: Action) => {
    return _countReducer(state, action);
}