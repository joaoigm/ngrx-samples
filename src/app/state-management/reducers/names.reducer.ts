import { Action, createReducer, on } from '@ngrx/store';
import { changeName } from '../actions/all.actions';

const initialState = 'Carmelita';

const _namesReducer = createReducer(
    initialState,
    on(changeName, (state, action) => (
        state = action.name
    ))
);

export const namesReducer = (state, action: Action) => {
    return _namesReducer(state, action);
}