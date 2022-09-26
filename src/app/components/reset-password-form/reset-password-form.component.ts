import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordDto } from 'src/app/models/reset-password-dto';
import { EmailPasswordService } from 'src/app/services/email-password.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  newPassword!: string;
  confirmPassword!: string;
  resetPasswordDto!: ResetPasswordDto;
  tokenPassword!: string;
  loginForm!: FormGroup;

  constructor(
    private emailPasswordService: EmailPasswordService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    // Reactive form
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })

  }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    // https://medium.com/@seraya/netlify-redirect-rules-for-angular-6-apps-d9f27ad40449
    // this.tokenPassword = this.activatedRoute.snapshot.paramMap.get('tokenPassword') as string;
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.tokenPassword = paramMap.get('tokenPassword')!;
    })

    this.resetPasswordDto = new ResetPasswordDto(this.newPassword, this.confirmPassword, this.tokenPassword);

    this.emailPasswordService.resetPassword(this.resetPasswordDto).subscribe(
      {
        next: data => {
          this.toastr.success(data.mensaje + ' Redirecting to home...', '', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          setTimeout(() => { this.router.navigate(['']); }, 3000);
        },
        error: err => {
          this.toastr.error(err.error.mensaje, '', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          setTimeout(() => {  window.location.reload(); }, 3000);
        }
      });
  }

}
