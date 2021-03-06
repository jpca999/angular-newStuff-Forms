import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet'; 
  answer = ''; 
  genders = ['male', 'female']; 
  genderSelected = 'male'; 
  
  @ViewChild('f') signupForm:NgForm;

  onSubmit(){
    console.log('signupForm =', this.signupForm);
  }


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName, 
    //     email: ''
    //   }, 
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.signupForm.form.patchValue({
        userData: {
          username: suggestedName
        }
    }); 

  }

  // onSubmit(form: NgForm){
  //   console.log('15- on Submit called n  form =', form.value);


}
 