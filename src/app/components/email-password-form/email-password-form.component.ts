import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailPasswordService } from 'src/app/services/email-password.service';

@Component({
  selector: 'app-email-password-form',
  templateUrl: './email-password-form.component.html',
  styleUrls: ['./email-password-form.component.css']
})
export class EmailPasswordFormComponent implements OnInit {
  @ViewChild('closebutton')
  closebutton!: ElementRef;
  @ViewChild('openmodal')
  openmodal!: ElementRef;
  email!: string;
  passwordEmailForm!: FormGroup;
  msg!: string;

  constructor(
    private formBuilder: FormBuilder,
    private emailPasswordService: EmailPasswordService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    // Reactive form
    this.passwordEmailForm = this.formBuilder.group({
      emailTo: ['', [Validators.required, Validators.email]]
    })
    this.passwordEmailForm.reset();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.email = this.passwordEmailForm.value.emailTo;
    this.emailPasswordService.sendEmail(this.passwordEmailForm.value).subscribe(
      {
      next: data => {
        this.msg = data.mensaje;
        this.passwordEmailForm.reset();
        this.closebutton.nativeElement.click();
        this.openmodal.nativeElement.click();
      },
      error: err => {
        this.toastr.error(err.error.mensaje, '', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });     
      }
    }
    );
  }
  onClose(){
    this.passwordEmailForm.reset();
  }
}
