import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  submitContactForm(form:any){
    if(form.invalid){
      return;
    }
    let firstName = form.form.controls.firstName.value;
    let lastName = form.form.controls.lastName.value;
    let email = form.form.controls.email.value;
    let subject = form.form.controls.subject.value;
    let message = form.form.controls.message.value;
    form.reset();
  }
}
