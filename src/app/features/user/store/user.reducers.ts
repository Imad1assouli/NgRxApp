import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.interface";
import { createUser, deleteUser, loadUsersFailures, loadUsersSuccess, updateUser } from "./user.actions";

export interface UserState{
  users:User[];
  error:string|null;
}
export const initialState:UserState={
  users:[],
  error:null
}
export const userReducer=createReducer(
  initialState,
  on(loadUsersSuccess,(state,{users})=>({
    ...state,
    users,
    error:null

  })),
  on(loadUsersFailures,(state,{error})=>({
    ...state,
    error
  })),
  on(createUser,(state,{user})=>({
    ...state,
    users:[...state.users,user]
  })),
  on(deleteUser,(state,{id})=>({
    ...state,
    users:state.users.filter(u=>u.id!==id)
  })),
  on(updateUser,(state,{user})=>({
    ...state,
    users:state.users.map(u=>(u.id!==user.id ? user : u))
  }))

);
