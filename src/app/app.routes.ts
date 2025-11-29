import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Departments } from './pages/departments/departments';
import { SideNav } from './components/side-nav/side-nav';
import { Employee } from './pages/employee/employee';
import { Signal } from './pages/signal/signal';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: Login },
  {
    path: '',
    component:SideNav,
    children: [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'departments', component: Departments },
      {path:'employees',component:Employee},
{path:'signal',component:Signal}
    ],
  },

  { path: '**', redirectTo: '/login' },
];
