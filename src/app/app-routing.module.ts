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

const routes: Routes = [
  // Páginas
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "contact", component: ContactComponent},

  // Formularios
  {path: "admin", component: AdminComponent},
  {path: "volunteer", component: VolunteerComponent},
  {path: "login", component: LoginComponent},

  // Global
  {path: "navbar", component: NavbarComponent},
  {path: "footer", component: FooterComponent},

  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
