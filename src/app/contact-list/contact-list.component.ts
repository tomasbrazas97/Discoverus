import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  // contacts array
  contacts ;
  constructor(private contact: ContactService, private  route: Router) { }

  ngOnInit() {
    // setting id to empty it will only be set through update mthod
    this.contact.id = '';
    // setting contacts array bt calling list method in contact service
    this.contact.list().subscribe((data) => {this.contacts = data});
  }

  delete(id)
  {   // calling delete method of contact service and then updating the contact list
      this.contact.delete(id).subscribe((data) => {
      this.contact.list().subscribe((data2) => {this.contacts = data2});
    })
  }

  update(id)
  {
    // calling update method of contact service and then updating the contact list
    this.contact.id = id;
    this.route.navigate(['update']);

  }
}
