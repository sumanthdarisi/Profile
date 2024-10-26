import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Introduction = `I'm Sumanth Darisi - a Computer Science Masters graduate with 5+ years of IT working experience, 
        in both designing and developing secured Microsoft .Net C#, MVC, Angular and front-end applications using advanced frameworks, 
        tools & technologies. . . .`;
  Phone = "+91 (630) 581-5232";
  Email = "Sumanthdarisi@outlook.com";
  Address = "Nellore, AndhraPradesh, India";
  constructor() { }

  ngOnInit(): void {
  }

  Technologies = [
    {Name:".Net C#", Years: 5},
    {Name:"Angular", Years: 4},
    {Name:"ASP.Net MVC", Years: 5},
    {Name:"MS SQL Server", Years: 5},
    {Name:"Web API", Years: 5},
    {Name:"Entity Framework", Years: 4},
    {Name:"WCF", Years: 5},
    {Name:"HTML5", Years: 5},
    {Name:"Bootstrap", Years: 5},
    {Name:"CSS", Years: 5},
    {Name:"ADO.Net", Years: 5},
    {Name:"SSIS", Years: 2},
    {Name:"SSRS", Years: 2},
    {Name:"TFS Version Control", Years: 3},
    {Name:"Javascript",Years: 5}
  ]

}
