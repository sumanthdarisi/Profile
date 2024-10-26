import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Profile';

  navLinks = [
    {label:'Home',path:'/Home'},
    {label:'Academics',path:'/Academics'},
    {label:'Work Experience',path:'/WorkExperience'},
    {label:'Contact',path:'/Contact'},
    {label:'Portfolio',path:'/Portfolio'}
  ];


}
