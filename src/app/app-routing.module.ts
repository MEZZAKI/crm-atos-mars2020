import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
//import { PageNotFoundComponent } from './page-not-found-module/pages/page-not-found/page-not-found.component';
//import { PageClientsComponent } from './clients/pages/page-clients/page-clients.component';
//import { PagePrestationsComponent } from './prestations/pages/page-prestations/page-prestations.component';


const appRoutes: Routes = [
  //{ path: 'login', component: PageLoginComponent },
  //{ path: 'prestations', component:PagePrestationsComponent  },
  //{ path: 'clients', component: PageClientsComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(m => m.PrestationsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found-module/page-not-found-module.module').then(m => m.PageNotFoundModuleModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing: false,     preloadingStrategy: PreloadAllModules}  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
