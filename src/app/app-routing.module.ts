import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './userform/userform.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ProfileComponent } from './profile/profile.component';
import { DemandeComponent } from './gestionCIN/demande/demande.component';
import { RenouvellementComponent } from './gestionCIN/renouvellement/renouvellement.component';
import { DuplicataComponent } from './gestionCIN/duplicata/duplicata.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: RegistreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'form/:id', component: UserFormComponent },
  { path: 'listuser', component: ListuserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'demandeCIN', component: DemandeComponent },
  { path: 'renouvellementCIN', component: RenouvellementComponent },
  { path: 'duplicataCIN', component: DuplicataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
