import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = "http://localhost:8080/api/v1/users"
  URL_AUTH: string = "http://localhost:8080/api/v1/auth"

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.URL);
  }

  saveUser(user: User): Observable<User>{
    return this.http.post<User>(this.URL_AUTH + "/register", user);
  }

  deleteUser(userId: number){
    return this.http.delete(this.URL + "/" + userId);
  }

}
