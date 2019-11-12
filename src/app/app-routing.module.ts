import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [{ path : '', redirectTo : 'index', pathMatch : 'full'},
                        { path : 'index', component : ContactListComponent },
                        { path : 'add', component : AddContactComponent },
                        { path : 'update', component : UpdateContactComponent }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
