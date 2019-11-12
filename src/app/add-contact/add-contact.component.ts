import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  // variables for form
  cemail = ''
  cname = ''
  cphone = ''
  constructor(private contact: ContactService, private route: Router) { }

  ngOnInit() {
    // setting id to empty it will only be set through update method
    this.contact.id = '';
  }
  add = function(event, name, email, phone){
    // overriding html form behaviour
    event.preventDefault();
    // calling add method in  contact service
    this.contact.add(name, email, phone).subscribe((data) => {
      alert('Contact Inserted');
      // navigate user to contact list
      this.route.navigate(['index']);
    });
  }
}
