import { Component } from '@angular/core';
import { NewModel , TodoItem} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular First Project';
  model = new NewModel;
  user = this.model.user;
  getItems(){
    return this.model.items;
  }
  addItem(value: string){
    if(value != ""){
      this.model.items.push(new TodoItem(value,false));
    }
  }
}


