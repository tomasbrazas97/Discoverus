import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  id;
  constructor(private http: HttpClient) { }

  // method for requesting contact insertion
  add(name, email, phone) {
    return this.http.post('http://localhost:3000/contact',{'email' : email, 'name': name, 'phone': phone});
  }

  // method for requesting contact list
  list() {
    return this.http.get('http://localhost:3000/contact');
  }
  // method for requesting contact delete through id
  delete(id) {
    return this.http.post('http://localhost:3000/delete', {'id': id});
  }
  // method foe requesting single contact through id
  getContact(id) {
    return this.http.post('http://localhost:3000/Singlecontact' , {'id': id});
  }
  // method for requesting to update a contact
  update(name, email, phone, id) {
    return this.http.post('http://localhost:3000/update',{'email' : email, 'name': name, 'phone': phone, 'id': id});
  }
}
