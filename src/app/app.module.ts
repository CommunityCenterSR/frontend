import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { GalleryComponent } from './Components/Pages/gallery/gallery.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { LoginComponent } from './Components/Forms/login/login.component';
import { VolunteerComponent } from './Components/Forms/volunteer/volunteer.component';
import { NavbarComponent } from './Components/Global/navbar/navbar.component';
import { FooterComponent } from './Components/Global/footer/footer.component';
import { CardComponent } from './Components/Global/card/card.component';
import { EventComponent } from './Components/Forms/event/event.component';
import { SectionsComponent } from './Components/Forms/sections/sections.component';
import { UsersComponent } from './Components/Forms/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent,
    VolunteerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    EventComponent,
    SectionsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
