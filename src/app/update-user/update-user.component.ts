import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private user: UserService, private route: Router) { }
  // variables for form
  uemail = '';
  uname = '';
  uphone = '';
  data ;
  ngOnInit() {
    // calling update method in contact service
    this.user.getUser(this.user.id).subscribe((data) => {
          // updating variables to update form inputs
          this.data = data;
          // tslint:disable-next-line: no-string-literal
          this.uemail = this.data['user']['email'];
            // tslint:disable-next-line: no-string-literal
          this.uname = this.data['user']['name'];
            // tslint:disable-next-line: no-string-literal
          this.uphone = this.data['user']['phone'];
    });
  }

  update = function(event, name, email, phone) {
    event.preventDefault();
    this.contact.update(name, email, phone, this.user.id).subscribe((data) => {
      console.log(data);
      alert('User Updated');
      this.route.navigate(['index']);
    });
  };

}
