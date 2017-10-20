
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './product-details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
