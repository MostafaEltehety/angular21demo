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
    component: SideNav,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'departments', component: Departments },
      { path: 'employees', component: Employee },
      { path: 'signal', component: Signal }
    ],
  },


  {
    path: 'blank',
    loadComponent: () => import('./pages/e-commerce/layouts/blank-layout/blank-layout').then((m) => m.BlankLayout),
    children: [

      {path: 'home',loadComponent: () => import('./pages/e-commerce/components/home/home').then((m) => m.Home)},
      { path: 'product', loadComponent: () => import('./pages/e-commerce/components/product/product').then(m => m.Product) },
      { path: 'cart', loadComponent: () => import('./pages/e-commerce/components/cart/cart').then(m => m.Cart) }

    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/e-commerce/layouts/auth-layout/auth-layout').then((m) => m.AuthLayout)
  },
  { path: '**', redirectTo: '/login' },
];
