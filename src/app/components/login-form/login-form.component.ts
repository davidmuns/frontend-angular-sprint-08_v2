import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LoginUsuario } from './../../models/ILoginUsuario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // https://www.youtube.com/watch?v=AyuIaJTqBLs
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('openModal') openModal: any;
  loginForm: FormGroup;
  errorMsj!: string;
  segundos: number = 20;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Reactive form
    this.loginForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.loginForm.reset();
  }

  ngOnInit(): void {
    this.loginForm.reset();
  }

  public onClose() {
    this.loginForm.reset();
  }

  public onSubmit() {
    const loginUsuario: LoginUsuario = this.loginForm.value;
    this.userService.setLogin(loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.toastr.success(`Welcome again ${loginUsuario.nombreUsuario}!`, '', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.loginForm.reset();
        this.closebutton.nativeElement.click();
        //setTimeout(this.logOut, 5000);
        //setInterval(() => this.tick(), 1000);
        this.router.navigate(['/starship/all']);
      },
      err => {
        this.errorMsj = err.error.message;
        this.toastr.error(this.errorMsj, '', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.loginForm.reset();
        this.userService.setIsUserValidated(false);
      }
    );
  }

  private tick() {
    console.log(--this.segundos);
    if (this.segundos === 5) {
      this.openModal.nativeElement.click();
    }
  }

  private logOut() {
    alert("session is closed")
    window.localStorage.clear();
    this.router.navigate(['']);
  }
}
