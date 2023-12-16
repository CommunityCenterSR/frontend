import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Volunteer } from '../Models/volunteer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  URL: string = "http://localhost:8080/api/v1/volunteers"

  getAllVolunteers(): Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>(this.URL);
  }

  saveVolunteer(volunteer: Volunteer): Observable<Volunteer>{
    console.log(volunteer);
    
    return this.http.post<Volunteer>(this.URL, volunteer);
  }

  deleteVolunteer(volunteerId: number){
    return this.http.delete(this.URL + "/" + volunteerId);
  }

}
