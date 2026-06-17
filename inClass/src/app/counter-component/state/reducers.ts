import { createReducer, on } from "@ngrx/store";
import { initialState } from "./states";
import { decrement, increment } from "./actions";

export const counterReducer = createReducer(initialState,
    on(increment,(state)=>{
        return { count: state.count + 1}
    }),
    on(decrement, (state)=>{
        return { count: state.count - 1}
    })
)