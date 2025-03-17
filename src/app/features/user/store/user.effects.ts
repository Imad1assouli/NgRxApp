import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { tap, switchMap, map, catchError, of } from "rxjs";
import * as UserActions from './user.actions';



@Injectable()
export class UserEffects{
  private readonly action$=inject(Actions);
  private readonly userService=inject(UserService);

  loadUsers$ =createEffect(()=>{
    return this.action$.pipe(
      tap(action=>console.log('Effect Action: ',action)),
      ofType(UserActions.getUsers),
      switchMap(()=>
      this.userService.getUsers().pipe(
        tap(data => console.log('Service Response:', data)),
        map(users => UserActions.loadUsersSuccess({ users })),
        catchError(error => {
          console.error('Effect Error:', error);
          return of(UserActions.loadUsersFailures({ error: error.message }));
        })
      )
    )
  );
});
}
/*
 // Effet pour obtenir un utilisateur par ID
  getUserById$ = createEffect(() => {
    return this.action$.pipe(
      ofType(UserActions.getUserById),
      switchMap(action =>
        this.userService.getUserById(action.id).pipe(
          map(user => UserActions.loadUserByIdSuccess({ user })),
          catchError(error => of(UserActions.loadUserByIdFailure({ error: error.message })))
        )
      )
    );
  });

  // Effet pour mettre à jour un utilisateur
  updateUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(UserActions.updateUser),
      switchMap(action =>
        this.userService.updateUser(action.user).pipe(
          map(user => UserActions.updateUserSuccess({ user })),
          catchError(error => of(UserActions.updateUserFailure({ error: error.message })))
        )
      )
    );
  });

  // Effet pour supprimer un utilisateur
  deleteUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(action =>
        this.userService.deleteUser(action.id).pipe(
          map(() => UserActions.deleteUserSuccess({ id: action.id })),
          catchError(error => of(UserActions.deleteUserFailure({ error: error.message })))
        )
      )
    );
  });
*/
