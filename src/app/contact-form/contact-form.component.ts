import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, EmailValidator} from "@angular/forms";
import {ContactInfo} from "./contact-info";
import {FormsModule} from "@angular/forms";
import {MultipleChoiceQuestion} from "./multipleChoiceQuestion";
import {Countries} from "./countries";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

//TODO: GOALS implementieren

  //TODO: muss wahrscheinlich dieselbe Reihenfolge wie im Backend haben
  goalsQuestion = new MultipleChoiceQuestion(
    "Goals:", ["Risk Mitigation","Maximizing Yield","Optimizing Time Efficiency"]);

  countries = new Countries();

  contactInfo:ContactInfo={
    name:"",
    email:"",
    country: {id :-1, country:"Country"},
    companyCheckBox:false,
    companyName:"",
    goals:[],
    message:""
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  //TODO: Service zum senden ans Backend
  onSubmit(){
    console.log(this.contactInfo)
    //goals-question
    this.contactInfo.goals = [];
    const answerOptions=this.goalsQuestion.answerOptions;
    for(let index = 0; index<answerOptions.length;index++){
      const answer = answerOptions[index];
      if(answer.checked) this.contactInfo.goals.push(answer.id);
    }

    console.log(this.contactInfo)
  }

  //TODO: change to id
  setCountry(id: number){
    this.contactInfo.country = this.countries.countries[id];
  }

  protected readonly alert = alert;
  protected readonly Event = Event;
  protected readonly event = event;
}

