import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Departments } from './pages/departments/departments';
import { SideNav } from './components/side-nav/side-nav';
import { Employee } from './pages/employee/employee';
import { Signal } from './pages/signal/signal';
import { authEcommerceGuard } from './pages/e-commerce/guards/auth-ecommerce-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: Login },
  {
    path: '',
    component: SideNav,
    canActivate:[authEcommerceGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent:()=>import('./pages/home/home').then((m)=>m.Home) },
      { path: 'departments',loadComponent:()=>import('./pages/departments/departments').then((m)=>m.Departments) },
      { path: 'employees', loadComponent:()=>import('./pages/employee/employee').then((m)=>m.Employee)},
      { path: 'signal', loadComponent:()=>import('./pages/signal/signal').then((m)=>m.Signal) },
      {path:'users',loadComponent:()=>import('./pages/user/user').then(m=>m.User)}
    ],
  },


  {
    path: 'blank',
    canActivate:[authEcommerceGuard],
    loadComponent: () => import('./pages/e-commerce/layouts/blank-layout/blank-layout').then((m) => m.BlankLayout),
    children: [
{path:'',redirectTo:'home',pathMatch:'full'},
      {path: 'home',loadComponent: () => import('./pages/e-commerce/components/home/home').then((m) => m.Home)},
      { path: 'product', loadComponent: () => import('./pages/e-commerce/components/product/product').then(m => m.Product) },
   {path:'product-details/:id',loadComponent:()=>import('./pages/e-commerce/components/product/product-details/product-details').then(m=>m.ProductDetails)},
      { path: 'cart', loadComponent: () => import('./pages/e-commerce/components/cart/cart').then(m => m.Cart) }

    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/e-commerce/layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',loadComponent:()=>import('./pages/e-commerce/components/login/login').then(m=>m.Login)},
      {path:'signup',loadComponent:()=>import('./pages/e-commerce/components/signup/signup').then(m=>m.Signup)}
    ]
  },
  { path: '**', redirectTo: '/login' },
];
