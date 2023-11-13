import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersComponent } from '../../Forms/users/users.component';
import { EventComponent } from '../../Forms/event/event.component';
import { SectionsComponent } from '../../Forms/sections/sections.component';
import { LoginService } from 'src/app/Security/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  currentForm: String = "users"; // Form. seleccionado al cargar la página
  currentComponent: any = UsersComponent; // Componente seleccionado

  // Para agregar nuevo botón en la sidebar
  forms = [
    { name: "Usuarios", form: "users", component: UsersComponent },
    { name: "Eventos", form: "events", component: EventComponent },
    { name: "Secciones", form: "sections", component: SectionsComponent },

  ]

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
    ) { }

  changeForm(section: string) {
    const selectedSection = this.forms.find(s => s.form === section);
    if (selectedSection) {
      this.currentForm = section;
      this.currentComponent = selectedSection.component;
    }
  }

  logout(){
    this.loginService.logout().subscribe();
    this.router.navigate(["home"]);
  }

}
