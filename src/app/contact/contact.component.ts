import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }



  sendMessage() {

  }

  resetForm() {
    this.contactForm.reset();
  }

}
