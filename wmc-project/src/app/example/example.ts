import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink],
  standalone : true,
  selector: 'app-example',
  styleUrl: './example.css',
  templateUrl: './example.html',
})


export class Example{

}