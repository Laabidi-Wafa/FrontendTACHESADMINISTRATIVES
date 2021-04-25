import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserserviceService } from './services/userservice.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './userform/userform.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistreComponent } from './registre/registre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DemandeComponent } from './gestionCIN/demande/demande.component';
import { RenouvellementComponent } from './gestionCIN/renouvellement/renouvellement.component';
import { DuplicataComponent } from './gestionCIN/duplicata/duplicata.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ChoixComponent } from './gestionCIN/choix/choix.component';
import { ChoixPComponent } from './gestionPermis/choix-p/choix-p.component';
import { ChoixCGComponent } from './gestionCG/choix-cg/choix-cg.component';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    UserFormComponent,
    ListuserComponent,
    ProfileComponent,
    RegistreComponent,
    NavigationComponent,
    FooterComponent,
    DemandeComponent,
    RenouvellementComponent,
    DuplicataComponent,
    UserNavbarComponent,
    ChoixComponent,
    ChoixPComponent,
    ChoixCGComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
