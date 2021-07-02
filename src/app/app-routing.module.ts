import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full',
  },

  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'quiz/:topic', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
