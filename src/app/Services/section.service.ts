import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../Models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  URL: string = "http://localhost:8080/api/v1/information"

  constructor(private http: HttpClient) { }

  getAllInfo(): Observable<Section[]>{
    return this.http.get<Section[]>(this.URL);
  }

  getInfoByType(type: string): Observable<Section>{
    return this.http.get<Section>(this.URL + "/type/" + type);
  }

  saveInfo(info: Section){
    return this.http.post(this.URL, info);
  }

  deleteInfo(infoId: number){
    return this.http.delete(this.URL + "/" + infoId);
  }

}
