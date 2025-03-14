import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './features/user/components/user-home/user-home.component';
import { UserFormComponent } from './features/user/components/user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user/add', component: UserFormComponent },
  { path: 'user', component: UserHomeComponent },
  { path: '**', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
