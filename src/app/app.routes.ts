import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { RouterModule } from '@angular/router';
import { Home } from './Pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    }
];
