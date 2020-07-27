import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './_component/todo/todo.component';
import { AdduserComponent } from './_component/adduser/adduser.component';
import { ListProductComponent } from './_component/list-product/list-product.component';
import { UserCardComponent } from './_component/user-card/user-card.component';
import { HomeComponent } from './_component/home/home.component';

const routes: Routes = [
  {path: '' , pathMatch:'full' , redirectTo: '/HomeComponent'},

  {path:'todo', component: TodoComponent},
  {path:'addproduct', component: AdduserComponent },
  {path:'listproduct', component: ListProductComponent },
  {path:'myCart',component:UserCardComponent },
  {path:'product-dashboard', loadChildren:() => import ('./product-dashboard/product-dashboard.module').then(m => m.ProductDashboardModule)  },
  {path:'**', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
