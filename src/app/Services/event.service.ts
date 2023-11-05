import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Event } from '../Models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL_EVENT: string = "http://localhost:8080/api/v1/posts";
  URL_CATEGORY: string = "http://localhost:8080/api/v1/categories";

  constructor(private http: HttpClient) { }

  // -----------------------------------------------------
  // EVENT SERVICE METHODS

  getAllEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.URL_EVENT);
  }

  getEventById(eventId: number): Observable<Event>{
    return this.http.get<Event>(this.URL_EVENT + "/" + eventId);
  }

  saveEvent(event: Event){
    return this.http.post(this.URL_EVENT, event);
  }

  updateEvent(eventId: number, event: Event){
    return this.http.put(this.URL_EVENT + "/" + eventId, event);
  }

  deleteEvent(eventId: number){
    return this.http.delete(this.URL_EVENT + "/" + eventId);
  }
  
  // -----------------------------------------------------
  // CATEGORY SERVICE METHODS

  getAllCategories(){
    return this.http.get<Category[]>(this.URL_CATEGORY);
  }

  saveCategory(category: Category){
    return this.http.post(this.URL_CATEGORY, category);
  }

  deleteCategory(catId: number){
    return this.http.delete(this.URL_CATEGORY + "/" + catId);
  }

}
