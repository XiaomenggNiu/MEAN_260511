import { Routes } from '@angular/router';
import { Day6Component } from './day6-component/day6-component';
import { Day5Component } from './day5-component/day5-component';
import { Day3Component } from './day3-component/day3-component';
import { ChildComponent } from './day3-component/child-component/child-component';
import { Day4Component } from './day4-component/day4-component';
import { FirstComponent } from './first-component/first-component';
import { ProductComponent } from './product-component/product-component';
import { authGuardGuard } from './Auth/auth-guard-guard';
import { leaveComponentGuard } from './Auth/leave-component-guard';

export const routes: Routes = [
    {path:'', component: Day4Component},
    {path:'day6', component: Day6Component, 
        canActivate: [authGuardGuard], canDeactivate:[leaveComponentGuard]},
    {path:'day5', component: Day5Component},
    {path:'day3', component: Day3Component, 
        children:[
        {path:'child', component: ChildComponent}
    ]},
    // Lazy loading a component
    {path:'lifecycle', loadComponent:
        // go to the component file
        () => import('./lifecycle-intro/lifecycle-intro')
        // load the component class
        .then(c=>c.LifecycleIntro)},
    {path:'directive' , loadComponent: ()=>
        import('./directives-intro-component/directives-intro-component')
        .then(c => c.DirectivesIntroComponent)
    },
    // Path parameter
    {path:'product/:id/:userId', component: ProductComponent},
    // wildcard route
    {path:'**', component: FirstComponent},
];