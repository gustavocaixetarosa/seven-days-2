import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  @Input() title: string = '';
}
