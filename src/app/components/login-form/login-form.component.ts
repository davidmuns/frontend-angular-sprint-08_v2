import { IUser } from './../../models/iuser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // https://www.youtube.com/watch?v=AyuIaJTqBLs
  @ViewChild('closebutton') closebutton: any;
  loginForm: FormGroup;
 
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    // Reactive form
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.loginForm.reset();
  }

  ngOnInit(): void {
    this.loginForm.reset();
  }

  public onSubmit() {
    const user: IUser = this.loginForm.value;
    const userExists = this.userService.checkIfUserExists(user);

    // Closing modal window and reseting form if user exists by pressing button submit (continue)
    if (userExists) {
      this.loginForm.reset();
      this.closebutton.nativeElement.click();
    } else {
      this.loginForm.reset();
    }
  }
}
