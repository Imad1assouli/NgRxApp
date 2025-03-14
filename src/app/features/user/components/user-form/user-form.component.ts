import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  /*
  user = {
    name: '',
    email: '',
    age: null
  };
  */
  userForm!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.userForm=this.fb.group({
      name:['',Validators.required,Validators.minLength(3)],
      email:['',Validators.required,Validators.email],
      age:['',Validators.required,Validators.min(18),Validators.max(100)]
    })
  }
  onSubmit(){
    if(this.userForm.valid){
      console.log('User:', this.userForm.value);
    }else{
      console.log('Form is invalid');
    }
  }

/*
  onSubmit(){
    console.log('User:', this.user);
  }
 */

}
