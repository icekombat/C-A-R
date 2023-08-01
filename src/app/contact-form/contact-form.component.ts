import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, EmailValidator} from "@angular/forms";
import {ContactInfo} from "./contact-info";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

//TODO: GOALS implementieren

  contactInfo:ContactInfo={
    name:"",
    email:"",
    country:"",
    companyCheckBox:false,
    companyName:"",
    //goals:[],
    message:""
  }

  constructor() {
  }

  onSubmit(){
    this.validateInput()
    console.log(this.contactInfo)
    alert(this.contactInfo)
  }

  isEmailInputCorrect:boolean=true;
  companyNameInputCorrect:boolean = true;

  validateInput(){
    //Email validation

    //company-name validation

  }


  public consoleLogButton(){

  }

  protected readonly Goals = Goals;
}

/*
contactForm = new FormGroup({
  name: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
  country: new FormControl('',[Validators.required]),
  companyCheckbox:new FormControl(false,[Validators.required]),
  company: new FormControl(''),
  goals: new FormControl('',[Validators.required])
})
*/

/*
//companyname validation
this.companyNameInputCorrect = !(this.contactForm.controls['companyCheckbox'].value == true
  && this.contactForm.controls['company'].value == '');
*/

/*
* <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="name">name</label>
    <input
      id="name"
      type="text"
      formControlName="name"
    />
  </div>
  <div>
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      formControlName="email"
    />
  </div>
  <div>
    <label for="country">country</label>
    <input
      type="text"
      id="country"
      formControlName="country"
    />
  </div>

  <div>
    <label for="company">Company</label>
    <input
      formControlName="companyCheckbox"
      type="checkbox"
      name="company"
    />
    <!--TODO:can companyCheckbox be null?-->
    <input [hidden]="!contactForm.controls['companyCheckbox'].value!"
      formControlName="company"
      id="company"
      type="text">
  </div>


  <div>
    <label for="goals">What are yours goals?</label>
    <textarea
      formControlName="goals"
      id="goals"
      name="goals"
    ></textarea>
  </div>
  <button type="submit" [disabled]="!contactForm.valid">
    Send
  </button>
</form>
* */
enum Goals{
  GOAL1,
  GOAL2,
  GOAL3
}
