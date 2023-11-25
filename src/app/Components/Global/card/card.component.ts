import { Component, OnInit } from '@angular/core';
import { Category, Event } from 'src/app/Models/event';
import { EventService } from 'src/app/Services/event.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  // Para testear las cartas, despues eliminar
  lista: number[] = [1,1,1,1,1]

  allEvents: Event[] = [];

  eventList: Event[] = [];
  categoryList: Category[] = [];

  event: Event = new Event();
  keyword: string;

  constructor(private eventService: EventService){}

  ngOnInit(): void {
    this.getAllEvents();
    this.getAllCategories();
  }

  // ----------------------- Eventos -----------------------

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      data => {
        this.allEvents = data; // Guarda todos los eventos. Lista constante
        this.eventList = data; // Guarda la lista de eventos a mostrar
      },
      err => console.log(err))
  }

  getEventById(id: number){
    this.eventService.getEventById(id).subscribe(
      data => this.event = data,
      err => console.log("Error al cargar evento seleccionado"))
  }

  getEventDetails(id: number) {
    this.eventList.forEach(e => { if(e.id == id) this.event = e })
  }

  filterByCategory(cat: string){
    const filtered = this.allEvents.filter(e => e.category.name == cat);
    this.eventList = filtered;
  }

  filterAllEvents(){
    this.eventList = this.allEvents;
  }

  filterByImportants(){
    const filtered = this.allEvents.filter(e => e.important == 1);
    this.eventList = filtered;
  }

  filterByKeyword(){
    const filtered = this.allEvents.filter(
      e => e.title.toLowerCase().match(this.keyword.toLowerCase())
    )
    this.eventList = filtered;
  }

  // ----------------------- Categorías -----------------------

  getAllCategories(){
    this.eventService.getAllCategories().subscribe(
      data => this.categoryList = data,
      err => console.log("Error al cargar categorías"))
  }

  // ----------------------------------------------------------


}
