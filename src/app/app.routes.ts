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
    canActivate: [authEcommerceGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
      {
        path: 'departments',
        loadComponent: () => import('./pages/departments/departments').then((m) => m.Departments),
      },
      {
        path: 'employees',
        loadComponent: () => import('./pages/employee/employee').then((m) => m.Employee),
      },
      {
        path: 'signal',
        loadComponent: () => import('./pages/signal/signal').then((m) => m.Signal),
      },
      { path: 'users', loadComponent: () => import('./pages/user/user').then((m) => m.User) },
      {
        path: 'crud',
        loadComponent: () =>
          import('./pages/curd/curd').then((m) => m.Curd),
      },{
        path:'employee-form',loadComponent:()=>import('./pages/curd/employee-form/employee-form').then(m=>m.EmployeeForm)
      },
      {
        path: 'tdf',
        loadComponent: () => import('./pages/tdf/tdf').then((m) => m.Tdf),
      },{
        path:'reactive',
        loadComponent:()=>import('./pages/reactive-form/reactive-form').then(m=>m.ReactiveForm)
      },{
        path:'ViewChild',
        loadComponent:()=>import('./pages/view-child-tutorial/view-child-tutorial').then(m=>m.ViewChildTutorial)
      },{
        path:'responsive-table',
        loadComponent:()=>import('./pages/techNetzz/responsive-table/responsive-table').then(m=>m.ResponsiveTable)
      }
      ,{
        path:'master-details',
        loadComponent:()=>import('./pages/master-details/master-details').then(m=>m.MasterDetails)
      },{
        path:'directive',
        loadComponent:()=>import('./lessons/directive/directive').then(m=>m.Directive)
      },{
        path:'template',
        loadComponent:()=>import('./lessons/templete/templete').then(m=>m.Templete)
      },{
        path:'ng-template',
        loadComponent:()=>import('./lessons/ng-template/ng-template').then(m=>m.NgTemplate)
      },{
        path:'control-flow',
        loadComponent:()=>import('./lessons/control-flow/control-flow').then(m=>m.ControlFlow)
      },{
        path:'input-output',
        loadComponent:()=>import('./lessons/input-output/input-output').then(m=>m.InputOutput)
      }
    ],
  },

  {
    path: 'blank',
    canActivate: [authEcommerceGuard],
    loadComponent: () =>
      import('./pages/e-commerce/layouts/blank-layout/blank-layout').then((m) => m.BlankLayout),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/e-commerce/components/home/home').then((m) => m.Home),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./pages/e-commerce/components/product/product').then((m) => m.Product),
      },
      {
        path: 'product-details/:id',
        loadComponent: () =>
          import('./pages/e-commerce/components/product/product-details/product-details').then(
            (m) => m.ProductDetails
          ),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/e-commerce/components/cart/cart').then((m) => m.Cart),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/e-commerce/layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/e-commerce/components/login/login').then((m) => m.Login),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./pages/e-commerce/components/signup/signup').then((m) => m.Signup),
      }
    ],
  },
  { path: '**', redirectTo: '/login' },
];
