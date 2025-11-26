import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Departments } from './pages/departments/departments';

export const routes: Routes = [
  {path:'home',component:Home},
  {path:'login',component:Login},
  {path:'departments',component:Departments},
];
