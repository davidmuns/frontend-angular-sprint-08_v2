import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-password',
  templateUrl: './email-password.component.html',
  styleUrls: ['./email-password.component.css']
})
export class EmailPasswordComponent implements OnInit {
  @ViewChild('closebutton')
  closebutton!: ElementRef;
  email!: string;
  passwordEmailForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    // Reactive form
    this.passwordEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.passwordEmailForm.reset();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.passwordEmailForm.value);
    
    this.closebutton.nativeElement.click();
  }
  onClose(){
    this.passwordEmailForm.reset();
  }


}
