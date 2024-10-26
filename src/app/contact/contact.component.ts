import { Component, OnInit, OnChanges, OnDestroy, DoCheck} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FeedbackAPIService} from '../Shared/feedback-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnChanges,OnDestroy {
  feedback_class: string;
  texthere: boolean = false;
  PostFeedbackMessage:string; 
  TextMessage: string = "Thanks to the social media."; 
  TextMessage2: string = "Now we can connect on the below platforms to know more about me.";
  links = [
    {'name': 'github', 'link': 'https://github.com/sumanthdarisi','tooltip': 'Github'},
    {'name': 'facebook', 'link': 'https://www.facebook.com/sumanth.darisi/', 'tooltip': 'Facebook'},
    {'name': "instagram", 'link': 'https://www.instagram.com/sumanth.darisi/','tooltip': 'Instagram'},
    {'name': 'twitter', 'link': 'https://twitter.com/sumanthdarisi/', 'tooltip': 'Twitter'},
    {'name': 'envelope', 'link': 'mailto:sumanthdarisi@outlook.com','tooltip': 'Email'},
    {'name': 'linkedin', 'link': 'https://www.linkedin.com/in/sumanthdarisi/','tooltip': 'Linkedin'}
  ];

  
  constructor(public fservice: FeedbackAPIService) { 
    console.log('constructor console');
  }

  ngOnChanges(){
    console.log('onChanges console');
  }

  ngOnInit(): void {
    console.log('oninit console');
    this.resetform();
  }


  ngOnDestroy(){
    console.log('onDestroy console');
  }



  removeFeedbackMessage() :void{
    setTimeout(() => {
      this.feedback_class = " ";
      this.PostFeedbackMessage = null;
    }, 5000);
  }

  
  resetform(form?: NgForm){
    if(form!=null){
      form.resetForm();
    }
    this.fservice.formdata = {
      UserName: null,
      Feedback: null,
    }
  }

  f_feedbackText(form: NgForm){
    this.insertrecord(form);
  }

  
  insertrecord(f: NgForm){
      this.fservice.postFeedback(f.value).subscribe({
        next: res => {
          this.feedback_class="success_text";
          this.texthere= true;
          this.PostFeedbackMessage = "Feedback submitted successfully";
          this.resetform(f);
          this.removeFeedbackMessage();
        },
        error: err=>{
          this.feedback_class="error_text";
          this.texthere= true;
          this.PostFeedbackMessage = "Damn, feedback server is down again. Please try after sometime."
          this.resetform(f);
          this.removeFeedbackMessage();
        }
    });
  }

}
