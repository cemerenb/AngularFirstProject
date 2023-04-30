import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular First Project';
  user = 'Cem Eren Badur';
  items =  [
    { description: "Kahvaltı", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Sinema", action: "No" },
    { description: "Ödev", action: "No" }

  ];
}
