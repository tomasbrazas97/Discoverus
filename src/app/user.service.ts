import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id;
  constructor(private http: HttpClient) { }

  // method for requesting user insertion
  add(name, email, phone) {
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.post('http://localhost:3000/user', {'email' : email, 'name': name, 'phone': phone});
  }

  // method for requesting user list
  list() {
    return this.http.get('http://localhost:3000/user');
  }
  // method for requesting user delete through id
  delete(id) {
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.post('http://localhost:3000/delete', {'id': id});
  }
  // method foe requesting single user through id
  getUser(id) {
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.post('http://localhost:3000/Singleuser' , {'id': id});
  }
  // method for requesting to update a user
  update(name, email, phone, id) {
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.post('http://localhost:3000/update', {'email' : email, 'name': name, 'phone': phone, 'id': id});
  }
}

