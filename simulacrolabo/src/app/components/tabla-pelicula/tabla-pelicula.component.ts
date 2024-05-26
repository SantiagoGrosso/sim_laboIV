import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, DatePipe],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {
    @Input() peliculas ?: Array<Pelicula>;
    @Input() mostrarSeleccionar : boolean = true;
    @Output() event = new EventEmitter<Pelicula>();

    seleccionar(pelicula : Pelicula){
      this.event.emit(pelicula);
    }
}
