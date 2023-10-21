import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  icon:string = "assets/img/icon.png";

  formContact!:FormGroup;

  constructor(private fb:FormBuilder){
    this.formaContact();
  }

  get nameInvalid(){

    return this.formContact.get('name')?.invalid && this.formContact.get('name')?.touched;

  }

  get emailInvalid(){

    return this.formContact.get('email')?.invalid && this.formContact.get('email')?.touched;
    
  }

  get messageInvalid(){

    return this.formContact.get('message')?.invalid && this.formContact.get('message')?.touched;
    
  }

  formaContact(){
    this.formContact = this.fb.group({

      name:['', Validators.required],
      email:['', [Validators.required,Validators.email]],
      message:['', [Validators.required, Validators.minLength(5)]]

    })
  }

  send(){
    console.log(this.formContact);
    if (this.formContact.invalid) {
      return Object.values(this.formContact.controls).forEach(control=>{
        control.markAsUntouched();
      })
    }
  }

  clean(){
    console.log(this.formContact);

    this.formContact.reset();
  }
}
