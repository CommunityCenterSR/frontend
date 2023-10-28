import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/Models/section';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit{

  newInfo: Section = new Section();

  information: Section[] = [];

  aboutUs: string;
  instagramLink: string;
  facebookLink: string;
  phone: string;
  address: string;


  constructor(private sectionService: SectionService){}

  ngOnInit(): void {
    this.getAllInfo()
  }

  getAllInfo(){
    this.sectionService.getAllInfo().subscribe(
      data => {
        this.information = data
      },
      err => console.error(err)
      
    )
  }

  saveInfo(type: string){ // Se puede mejorar.
    this.newInfo.type = type;

    switch(type){
      case "sobrenosotros": this.newInfo.content = this.aboutUs;       break;
      case "telefono":      this.newInfo.content = this.phone;         break;
      case "direccion":     this.newInfo.content = this.address;       break;
      case "instagram":     this.newInfo.content = this.instagramLink; break;
      case "facebook":      this.newInfo.content = this.facebookLink;  break;
    }

    this.sectionService.saveInfo(this.newInfo).subscribe(
      data => {
        alert("Guardado correctamente");
        this.newInfo = new Section();
        this.getAllInfo();
      },
      err => console.error(err)
    )
  }

  deleteInfo(infoId: number){
    if(confirm("¿Estás seguro que querés eliminar la información?")){
      this.sectionService.deleteInfo(infoId).subscribe(
        data => {
          alert("Eliminado correctamente");
          this.getAllInfo();
        },
        err => alert("ERROR al eliminar")
      )
    }
  }


}
