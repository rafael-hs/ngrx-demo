import { createAction, props, createReducer, on, State } from '@ngrx/store'

enum ActionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement',
}

export const Decrement = createAction(
    ActionTypes.Decrement
)

export const Increment = createAction(
    ActionTypes.Increment
)

const INITIAL_STATE = {
    counter: 0
}

export const reducer = createReducer(
    INITIAL_STATE,
    on(Increment, state => ({
        ...state,
        counter: state.counter + 1
    })),
    on(Decrement, state => ({
        ...state,
        counter: state.counter - 1
    }))
)

// (state = INITIAL_STATE, action: any) => {
//     switch (action.type) {
//         case ActionTypes.Decrement:
//             return { ...state, counter: state.counter - 1 }
//         case ActionTypes.Increment:
//             return { ...state, counter: state.counter + action.payload }
//         default:
//             return state
//     }
// } 