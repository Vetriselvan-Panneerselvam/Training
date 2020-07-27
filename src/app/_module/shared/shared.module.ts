import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { TodoComponent } from '../../_component/todo/todo.component';
import { AdduserComponent } from '../../_component/adduser/adduser.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CardMessageService } from '../../_service/card-message.service';
import { ToastService } from '../../_service/toast.service'
import { ListProductComponent} from '../../_component/list-product/list-product.component';
import { UserCardComponent } from '../../_component/user-card/user-card.component';
import { HomeComponent } from '../../_component/home/home.component'


@NgModule({
  declarations: [
    TodoComponent,
    AdduserComponent,
    ListProductComponent,
    UserCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    TodoComponent,
    AdduserComponent,
    ReactiveFormsModule,
    FormsModule,
    ListProductComponent,
    HomeComponent,
    UserCardComponent
  ],
  providers:[CardMessageService,ToastService]
})
export class SharedModule { }
