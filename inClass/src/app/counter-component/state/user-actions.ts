import { createAction, props } from "@ngrx/store";

export const userUpdate = createAction("[Counter Comp] Update",
    props<{username: string}>()
 );