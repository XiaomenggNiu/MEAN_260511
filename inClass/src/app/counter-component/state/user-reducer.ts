import { createReducer, on } from "@ngrx/store";
import { intialUsername } from "./user-state";
import { userUpdate } from "./user-actions";

export const userReducer = createReducer(intialUsername, 
    on(userUpdate, (state, props: {username: string})=>{
        console.log(state);
        return { username: props.username }
    })
)