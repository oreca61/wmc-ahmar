import { Component, signal } from '@angular/core';
import { RouterLink , RouterOutlet } from '@angular/router';
import { Navigation } from './shell/navigation/navigation';

@Component({
  imports: [RouterOutlet, RouterLink, Navigation],
  standalone:true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.component.html',
  
})
export class App {
  protected readonly title = signal('wmc-project');
}
