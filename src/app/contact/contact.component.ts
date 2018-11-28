import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ContactService } from './contact.service';

import swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }



   sendMessage() {
      this.contactService.sendMessage(this.contactForm.value).subscribe((response) => {
        swal({
          type: 'success',
          title: 'Great',
          text:  'Your message was received successfully'
        });
      });
      this.resetForm();
  }

  resetForm() {
    this.contactForm.reset();
  }

}
