import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
// variables for form
uemail = '';
uname = '';
uphone = '';
constructor(private contact: UserService, private route: Router) { }

ngOnInit() {
  // setting id to empty it will only be set through update method
  this.contact.id = '';
}
add = function(event, name, email, phone) {
  // overriding html form behaviour
  event.preventDefault();
  // calling add method in  contact service
  this.contact.add(name, email, phone).subscribe((data) => {
    alert('User Inserted');
    // navigate user to contact list
    this.route.navigate(['index']);
  });
};

}
