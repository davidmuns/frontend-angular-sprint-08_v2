

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordDto } from 'src/app/models/reset-password-dto';
import { EmailPasswordService } from 'src/app/services/email-password.service';

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

  constructor(
    private emailPasswordService: EmailPasswordService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onResetPassword(){
    this.tokenPassword = this.activatedRoute.snapshot.paramMap.get('tokenPassword') as string;
    this.resetPasswordDto = new ResetPasswordDto(this.newPassword, this.confirmPassword, this.tokenPassword);
    
    this.emailPasswordService.resetPassword(this.resetPasswordDto).subscribe(
      data => {
        this.toastr.success(data.mensaje, 'OK', {
          timeOut: 5000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastr.error(err.error.mensaje, '', {
          timeOut: 3000, positionClass: 'toast-top-center'        
        });
        // window.location.reload();
        //console.log(this.resetPasswordDto);  
      }
    );

  }

}
