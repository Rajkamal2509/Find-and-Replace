import { Routes } from '@angular/router';
import { FindReplaceComponent } from './pages/find-replace/find-replace.component';

export const routes: Routes = [

    {
        path: 'Home',
        component: FindReplaceComponent,
    },

    { path: '', pathMatch: 'full', redirectTo: 'Home' },
];
