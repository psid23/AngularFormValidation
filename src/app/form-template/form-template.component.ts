/* tslint:disable: member-ordering */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  isValidFormSubmitted = false;
  validateEmail = true;
  genders = ['Male', 'Female', 'Other'];
  user = {firstname:'James',middlename:'', lastname: 'Smith', email:'abcd@xyz.com', alterEgo: 'Dr. What', gender: this.genders[0], age:'18', birthdate:'01/25/1985'};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;    
    form.resetForm();
 }
 counter(i: number) {
  return new Array(i);
}
}
