import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  usersRegistered: User[] = [];

  newUser: User = new User();

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.getAllUsers();
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

}
