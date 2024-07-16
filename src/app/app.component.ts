import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, CategoriaComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'seven-days-2';
}
