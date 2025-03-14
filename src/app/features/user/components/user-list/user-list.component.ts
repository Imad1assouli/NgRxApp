import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users!:Observable<User[]>;
  @Output() userSelected= new EventEmitter<number>();

  constructor(){}

  deleteUser(id:number){
    this.userSelected.emit(id);
  }
  trackById(index:number,item:User){
    return item.id;
  }

}
