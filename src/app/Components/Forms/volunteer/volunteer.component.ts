import { Component } from '@angular/core';
import { Volunteer } from 'src/app/Models/volunteer';
import { VolunteerService } from 'src/app/Services/volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent {

  volunteer: Volunteer = new Volunteer();

  constructor(private volunteerService: VolunteerService){}

  saveVolunteer(){
    this.volunteerService.saveVolunteer(this.volunteer).subscribe(
      data => alert("Te inscribiste correctamente! Te llamaremos cuando sea necesario!"),
      err => alert("Error al inscribirse")
    )
  }

}
