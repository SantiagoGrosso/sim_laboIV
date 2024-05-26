import { Component, Input } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, DatePipe],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
    @Input() pelicula?: Pelicula;
}
