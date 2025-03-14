import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user/store/user.reducers';
import { UserEffects } from './user/store/user.effects';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserListComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Fix the reducer registration - remove the curly braces
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class FeaturesModule { }
