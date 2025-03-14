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

