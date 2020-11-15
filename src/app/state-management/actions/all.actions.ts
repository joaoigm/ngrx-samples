import {createAction, props} from '@ngrx/store';

export const increment = createAction(
    '[Count] Increment'
);

export const decrement = createAction(
    '[Count] Decrement'
);

export const changeName = createAction(
    '[Name] Change Name',
    props<{ name: string}>()
);
