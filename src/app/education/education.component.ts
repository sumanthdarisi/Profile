import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools =[
    {Name: 'Stevens Institute of Technology', StartYear: 2014, EndYear: 2015, Grade: '3.7 CGPA', City: 'Hoboken',State: 'New Jersey',Country: 'USA', Image: '../../assets/Stevens.png',Level: 'Masters'},
    {Name: 'SSN College Of Engineering', StartYear: 2009, EndYear: 2013, Grade: '71%', City: 'Chennai',State: 'TamilNadu',Country: 'India', Image: '../../assets/SSN.jpg',Level: 'Bachelors'},
    {Name: 'Narayana Jr. College', StartYear: 2007, EndYear: 2009, Grade: '96.1%', City: 'Nellore',State: 'AndhraPradesh',Country: 'India', Image: '../../assets/narayana.jpg',Level: 'High School'}
  ];
  constructor() { }


  ngOnInit(): void {

  }

}
