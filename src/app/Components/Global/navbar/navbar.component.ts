import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/Models/section';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  donacion_link: Section = new Section();
  donacion_500: Section = new Section();

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.getInfoByType();
  }

  async getInfoByType() {
    this.sectionService.getInfoByType("donacion_500").subscribe(
      data => this.donacion_500 = data
    )
    this.sectionService.getInfoByType("donacion_link").subscribe(
      data => this.donacion_link = data
    )

  }

}
