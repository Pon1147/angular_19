import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css', 
  
})
export class AppComponent {
  users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Mike'}
  ]
}