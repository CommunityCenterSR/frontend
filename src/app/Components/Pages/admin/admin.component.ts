import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  
  constructor(private router: Router, private activatedRoute: ActivatedRoute){}
  
  // BUG: a veces no se pueden apretar los botones para seleccionar formularios.

  // Posible solución 1: 
  //    Quitar el routerLink y ponerle evento (click) que 
  //    ejecute la función showComponent() y poner en el admin-component.html
  //          <div *ngIf="selectedComponent == 'users'"> <app-users></app-users> </div>

  selectedComponent: string = "user";
  showComponent(component: string){
    this.selectedComponent = component;
  }

}
