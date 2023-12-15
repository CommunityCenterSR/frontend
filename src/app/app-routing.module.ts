import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { GalleryComponent } from './Components/Pages/gallery/gallery.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { VolunteerComponent } from './Components/Forms/volunteer/volunteer.component';
import { LoginComponent } from './Components/Forms/login/login.component';
import { NavbarComponent } from './Components/Global/navbar/navbar.component';
import { FooterComponent } from './Components/Global/footer/footer.component';
import { UsersComponent } from './Components/Forms/users/users.component';
import { EventComponent } from './Components/Forms/event/event.component';
import { SectionsComponent } from './Components/Forms/sections/sections.component';
import { AuthGuard } from './Security/Helpers/auth.guard';

const routes: Routes = [
  // Páginas
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "contact", component: ContactComponent},
  {path: "gallery", component: GalleryComponent, canActivate: [AuthGuard]},
  {path: "admin", component: AdminComponent, canActivate: [AuthGuard]}, 
  // {path: "admin", component: AdminComponent},

  // Formularios
  {path: "login", component: LoginComponent},
  {path: "admin/users", component: UsersComponent, canActivate: [AuthGuard]},
  {path: "admin/events", component: EventComponent, canActivate: [AuthGuard]},
  {path: "admin/sections", component: SectionsComponent, canActivate: [AuthGuard]},
  {path: "admin/volunteer", component: VolunteerComponent, canActivate: [AuthGuard]},

  // Global
  {path: "navbar", component: NavbarComponent, canActivate: [AuthGuard]},
  {path: "footer", component: FooterComponent, canActivate: [AuthGuard]},

  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
