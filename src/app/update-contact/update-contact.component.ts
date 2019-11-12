import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  constructor(private contact: ContactService, private route: Router) { }
  // variables for form
  cemail = ''
  cname = ''
  cphone = ''
  data ;
  ngOnInit() {
    // calling update method in contact service
    this.contact.getContact(this.contact.id).subscribe((data) => {
          // updating variables to update form inputs
          this.data = data;
          this.cemail = this.data['contact']['email'];
          this.cname = this.data['contact']['name'];
          this.cphone = this.data['contact']['phone']

    });
  }

  update = function(event, name, email, phone){
    event.preventDefault();
    this.contact.update(name, email, phone, this.contact.id).subscribe((data) => {
      console.log(data)
      alert('Contact Updated');
      this.route.navigate(['index']);
    });
  }
}
