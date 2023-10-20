import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Para testear las cartas, despues eliminar
  lista: number[] = [1,1,1,1,1]

}
