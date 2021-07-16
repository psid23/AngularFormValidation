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
  user = {firstname:'James',middlename:'', lastname: 'Smith', email:'abcd@xyz.com', gender: this.genders[0], age:'18', birthdate:'01/25/1985', address:'', state:'CA', country:'USA'};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  addressPattern="/^[ A-Za-z0-9_@./#&+-']*$/";
  statePattern="/^[ A-Za-z]*$/";
  countryPattern="/^[ A-Za-z]*$/";
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
