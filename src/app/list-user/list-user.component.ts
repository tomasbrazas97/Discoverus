import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  // contacts array
  users ;
  constructor(private user: UserService, private  route: Router) { }

  ngOnInit() {
    // setting id to empty it will only be set through update mthod
    this.user.id = '';
    // setting contacts array bt calling list method in contact service
    this.user.list().subscribe((data) => {this.users = data; });
  }

  delete(id) {   // calling delete method of contact service and then updating the contact list
      this.user.delete(id).subscribe((data) => {
      this.user.list().subscribe((data2) => {this.users = data2; });
    });
  }

  update(id) {
    // calling update method of contact service and then updating the contact list
    this.user.id = id;
    this.route.navigate(['update']);

  }

}
