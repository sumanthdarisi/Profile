import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Projects = [
    {
      name: 'Covid Dashboard-IN',
      weblink:'https://indiacovid-2020.web.app/Covid',
      description: 'Covid dashboard shows the updated covid confirmed/ recovered/ deceased/ tests data from each state and respective districts in India.',
      image:'../../assets/CoronaVirus.jpg'
    },
    {
      name: 'To-do Task',
      weblink:'https://mynoteapp-88681.web.app/',
      description: 'A simple Todo app lets you add and remove tasks. Yet many functionalities needs to be added. Try the app hitting the below link.',
      image:  '../../assets/ToDoList.jpg'
    },
    {
      name: 'Weather App',
      weblink:'https://weatherapp-ng.web.app/weather',
      description: 'Wanna know whats the current weather in your city?? Try the below link to check the weather. App calls the API behind the scenes.',
      image:'../../assets/WeatherApp.jpg'
    }
  ]

}
