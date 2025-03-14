import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user.reducers';
import { UserService } from '../../services/user.service';
import { deleteUser, getUsers } from '../../store/user.actions';
import { selectAllUsers } from '../../store/user.selectors';

@Component({
  selector: 'app-user-home',
  standalone: false,
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  users$:Observable<User[]>;
  constructor(private store:Store<UserState>,private userService:UserService){
    this.getUsers();
    this.users$=this.store.select(selectAllUsers);

  }

  ngOnInit(): void { 
  }
  getUsers(){
    this.store.dispatch(getUsers());
  }

  onUsersSelected(id:number){
    this.store.dispatch(deleteUser({id}));

  }


}
