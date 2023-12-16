import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Volunteer } from 'src/app/Models/volunteer';
import { UserService } from 'src/app/Services/user.service';
import { VolunteerService } from 'src/app/Services/volunteer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  usersRegistered: User[] = [];
  volunteerList: Volunteer[] = [];

  newUser: User = new User();
  newVolunteer: Volunteer = new Volunteer();

  constructor(private userService: UserService, private volunteerService: VolunteerService){}

  ngOnInit(): void {
    this.getAllUsers();
    this.getVolunteers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data => this.usersRegistered = data,
      err => console.log(err)
    )
  }

  saveUser(){
    this.userService.saveUser(this.newUser).subscribe(
      data => {
        alert("Usuario creado correctamente");
        this.newUser = new User();
        this.getAllUsers();
    },
      err => alert("ERROR")
    )
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe(
      data => {
        alert("Usuario eliminado correctamente");
        this.getAllUsers();
      },
      err => alert("ERROR AL ELIMINAR")
    )
  }

  confirmDelete(userId: number){
    if(confirm("¿Seguro que querés eliminar este administrador?")){
      this.deleteUser(userId);
    }
  }

  // -------------------- Volunteers ------------------
  getVolunteers(){
    this.volunteerService.getAllVolunteers().subscribe(
      data => {
        this.volunteerList = data;
      },
      err => console.log(err)
    )
  }

  deleteVolunteer(volunteerId: number){

    if(confirm("Estás seguro de eliminar este voluntario?")){
      this.volunteerService.deleteVolunteer(volunteerId).subscribe(
        data => {
          alert("Eliminado correctamente"),
          this.getVolunteers();
      },
        err => alert("Error al eliminar voluntario")
      )
    }
  }

}
