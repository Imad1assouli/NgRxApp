import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.interface";


export enum userActionTypes{
  GetAll='[User] Get All Users',
  GetById='[User] Get User By Id',
  Create='[User] Create User',
  Update='[User] Update User',
  Delete='[User] Delete User',
  Error='[User] Error',
  LoadUsersSuccess='[User] Load Users Success',
  LoadUsersFailures='[User] Load Users Failures',
}
export const getUsers=createAction(userActionTypes.GetAll);


export const loadUsersSuccess=createAction(
  userActionTypes.LoadUsersSuccess,
  props<{users:User[]}>()
);

export const loadUsersFailures=createAction(
  userActionTypes.LoadUsersFailures,
  props<{error:string}>()
);

export const getUserById=createAction(
  userActionTypes.GetById,
  props<{id:number}>()
);

export const createUser=createAction(
  userActionTypes.Create,
  props<{user:User}>()
);

export const updateUser=createAction(
  userActionTypes.Update,
  props<{user:User}>()
);

export const deleteUser=createAction(
  userActionTypes.Delete,
  props<{id:number}>()
);
