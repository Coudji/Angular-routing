import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { OtterComponent } from './components/pages/otter/otter.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { DetailsComponent } from './components/pages/otter/details/details.component';
import { dumbGuardGuard } from './dumb-guard.guard';
import { LizardComponent } from './components/pages/lizard/lizard.component';
import { MinutesComponent } from './components/pages/minutes/minutes.component';
import { EvenComponent } from './components/pages/minutes/even/even.component';
import { OddComponent } from './components/pages/minutes/odd/odd.component';
import { isEvenMinutesGuard } from './is-even-minutes.guard';
import { isOddMinutesGuard } from './is-odd-minutes.guard';

export const routes: Routes = [{
    // redirige les requêtes de localhost:4200/ vers localhost:4200/home
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
},{
    path:'home',
    component: HomeComponent
},
{
    path: 'otter',
    component: OtterComponent,
    canActivate: [dumbGuardGuard],
    children: [{
        path: ':id',
        component: DetailsComponent
    }]
},
{
    path:'lizard',
    component: LizardComponent
},
{
    path: 'minutes',
    component: MinutesComponent,
    children: [{
        path: 'even',
        component: EvenComponent,
        canActivate:[isEvenMinutesGuard]
    },{
        path: 'odd',
        component: OddComponent,
        canActivate: [isOddMinutesGuard]
    }]
},
{
    // Le chemin joker doit absolumnet être en dernier. Car si il match un chemin, il ne verra pas les routes suivantes. Toutes routes déclaré après n'est pas accessible.
    path:'**',
    component: NotFoundComponent
}];
