import { Component, OnInit } from '@angular/core';
import { Category, Event } from 'src/app/Models/event';
import { EventService } from 'src/app/Services/event.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventList: Event[] = [];
  categoryList: Category[] = [];

  event: Event = new Event();
  category: Category = new Category();

  newCategoryNameString: string;

  constructor(private eventService: EventService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.event.category = this.category;
    this.getAllEvents();
    this.getAllCategories();

  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      data => {
        this.eventList = data;
      },
      err => console.log(err)

    )
  }

  getEventById(eventId: number) {
    this.eventService.getEventById(eventId).subscribe(
      data => {
        this.event = data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      err => console.log(err)
    )
  }

  saveEvent() {
    if (this.event.important) this.event.important = 1; // El evento es Destacado
    else this.event.important = 0; // El evento NO es Destacado

    this.eventService.saveEvent(this.event).subscribe(
      data => {
        this.event = new Event();
        alert("Guardado correctamente");
        this.getAllEvents();
      },
      err => alert("Error al crear evento")
    )
  }

  updateEvent(eventId: number) {
    if (this.event.important) this.event.important = 1; // El evento es Destacado
    else this.event.important = 0; // El evento NO es Destacado

    this.eventService.updateEvent(eventId, this.event).subscribe(
      data => {
        alert("Actualizado correctamente");
        this.getAllEvents();
      },
      err => alert("Error al actualizar evento")
    )
  }

  deleteEvent(eventId: number) {
    if (confirm("¿Estás seguro de que querés eliminar el evento?")) {
      this.eventService.deleteEvent(eventId).subscribe(
        data => {
          alert("Eliminado correctamente");
          this.getAllEvents();
        },
        err => alert("Error al eliminar")
      )
    }
  }


  // ------------------------------------------
  // Category methods

  getAllCategories() {
    this.eventService.getAllCategories().subscribe(
      data => {
        this.categoryList = data;
      },
      err => console.log(err)

    )
  }

  saveCategory() {

    let newCategory: Category = new Category();
    newCategory.name = this.newCategoryNameString;

    this.eventService.saveCategory(newCategory).subscribe(
      data => {
        alert("Categoría creada correctamente")
        this.newCategoryNameString = "";
        this.getAllCategories();
      },
      err => alert("Error al crear categoría")
    )
  }

  deleteCategory(catId: number) {
    if (confirm("Se eliminarán todos los eventos que estén dentro de esta categoría ¿Estás seguro de que deseas eliminarla? ")) {
      this.eventService.deleteCategory(catId).subscribe(
        data => {
          alert("Categoría eliminada correctamente");
          this.getAllCategories();
        },
        err => alert("Error al eliminar categoría")
      )
    }


  }
  // ------------------------------------------
  // Cargar imagen a Firebase

  imageLoaded: any;
  uploadImage(event: any){
    let file = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(file[0]);
    reader.onloadend = () => {
      this.imageLoaded = reader.result;
      this.storageService.uploadImage("CIC_" + Date.now(), reader.result)
        .then(urlImage => {
          this.event.image = urlImage? urlImage : 'null';
        });
    }

    
  }

  // ------------------------------------------
  exitEditMode() {
    this.event = new Event();
  }

}
