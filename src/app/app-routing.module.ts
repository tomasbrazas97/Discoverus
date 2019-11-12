import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from './list-user/list-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [{ path : '', redirectTo : 'index', pathMatch : 'full'},
                        { path : 'index', component : ListUserComponent },
                        { path : 'add', component : NewUserComponent },
                        { path : 'update', component : UpdateUserComponent }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
