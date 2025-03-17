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
/*

import { createAction, props } from '@ngrx/store';

// Actions pour obtenir un utilisateur par ID
export const getUserById = createAction('[User] Get User By ID', props<{ id: number }>());
export const loadUserByIdSuccess = createAction('[User] Load User By ID Success', props<{ user: any }>());
export const loadUserByIdFailure = createAction('[User] Load User By ID Failure', props<{ error: string }>());

// Actions pour mettre à jour un utilisateur
export const updateUser = createAction('[User] Update User', props<{ user: any }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: any }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: string }>());

// Actions pour supprimer un utilisateur
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: string }>());

*/
