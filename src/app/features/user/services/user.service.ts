import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[{
    id:1,
    name:'John Doe',
    email:'john.doe@gmail.com'
  },
  {
    id:2,
    name:'Jane Smith',
    email:'jane.smith@gmail.com'
  },
  {
    id:3,
    name:'Michael Johnson',
    email:'michael.johnson@gmail.com'
  },
  ];

  constructor() { }

  getUsers():Observable<User[]> {
    return of(this.users);
  }
  getUserById(id:number):Observable<User>{
    const user = this.users.find(user => user.id === id);
    if (user) {
        return of(user);
    } else {
        return throwError(() => new Error('User not found'));
    }

  }
  deleteUser(id:number):Observable<User>{
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
        this.users.splice(index, 1);
        return of(this.users[index]);
    } else {
        return throwError(() => new Error('User not found'));
    }

  }
  createUser(user:User):Observable<User>{
    this.users.push(user);
    return of(user);
  }

}
