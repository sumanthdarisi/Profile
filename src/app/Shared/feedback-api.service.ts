import { Injectable } from '@angular/core';
import { FeedbackModel } from './feedback-model.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackAPIService {
  private readonly baseaddress = "https://mytestapiwebapp.azurewebsites.net/api/feedback/post";
  formdata: FeedbackModel;

  constructor(private http: HttpClient) { 

  }


  postFeedback(formdata: FeedbackModel){
    return this.http.post(this.baseaddress,formdata);
  }
}
