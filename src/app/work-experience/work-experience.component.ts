import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  WorkExpience = [
    {Name: 'Morgan Stanley', 
      StartYear: 'August, 2020', 
      EndYear: 'Current', 
      Location: 'Bangalore, India', 
      Designation: 'Senior Manager',
      Description: `Morgan Stanley, headquartered in New York, USA, is a financial and investment firm. 
      Within its Wealth Management division, I hold the role of Senior Manager, responsible for designing and developing various .Net Web API and Angular applications utilized 
      by Financial Advisors within the organization.`,
      WebLink: 'https://www.morganstanley.com/'
    },
    {Name: 'Aetna Inc.', 
      StartYear: 'August, 2016', 
      EndYear: 'August, 2020',
      Location: 'Phoenix, USA', 
      Designation: 'Application Developer',
      Description: `Aetna Inc is a prominent health insurance provider. In my role as an application developer, 
      I've been actively involved in the design and development of several internal .Net desktop and web applications specific to Aetna. 
      Moreover, I've collaborated closely with production support and database administration teams to address production issues and enhance application performance.`,
      WebLink: 'https://www.aetna.com/'
    },
    {Name: 'Quicken Loans', 
      StartYear: 'June, 2015', 
      EndYear: 'August, 2015', 
      Location: 'Detroit, USA', 
      Designation: 'Application Developer',
      Description: `Quicken Loans operates as a mortgage company. In my capacity as an application developer, 
      I've focused on enhancing and redesigning internal applications, along with their functionalities, utilizing technologies such as .Net C#, ASP.Net MVC, and Angular.`,
      WebLink: 'https://www.quickenloans.com/'
    },
    {Name: 'Cognizant', 
      StartYear: 'September, 2013', 
      EndYear: 'May, 2014', 
      Location: 'Chennai, India', 
      Designation: 'Programming Analyst',
      Description: `
      Cognizant is a multinational company offering software services. 
      In my role as a programming analyst, I received training in object-oriented concepts, front-end development, and MS SQL technologies. 
      Throughout this period, I actively contributed to and provided support for various internal .Net-based applications within Cognizant.`,
      WebLink: 'https://www.cognizant.com/'
    }
  ]

}
