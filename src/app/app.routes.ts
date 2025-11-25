import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/home/login/login';

export const routes: Routes = [
  {path:'home',component:Home},
  {path:'login',component:Login}
];
