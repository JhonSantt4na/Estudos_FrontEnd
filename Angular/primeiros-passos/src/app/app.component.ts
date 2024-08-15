import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'qualque-nome', // Seletor do componete como se fosse um id
  standalone: true, // standalone ou NgModule 
  imports: [RouterOutlet, HomeComponent], // o que precisamos im
  templateUrl: './app.component.html', // template onde esta ele é required
  styleUrl: './app.component.css', // style onde esta aqui não é required
  // Posso colocar o proprio template aqui ou 1 ou outro
  // template: `
  //  <h1> Hello Word </h1>
  // `
})
export class AppComponent {
  title = 'primeiros-passos';
}
