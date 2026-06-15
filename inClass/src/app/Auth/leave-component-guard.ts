import { CanDeactivateFn } from '@angular/router';
import { Day6Component } from '../day6-component/day6-component';

export const leaveComponentGuard: CanDeactivateFn<Day6Component> = (component: Day6Component, currentRoute, currentState, nextState) => {
  console.log(component.registerForm)

    return component.registerForm.valid
    ? true : confirm('You have invalid changes. Are you sure you want to leave?')
    ;
};
