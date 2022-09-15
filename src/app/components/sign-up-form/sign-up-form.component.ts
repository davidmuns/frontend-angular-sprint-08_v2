import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  signUpForm: FormGroup;

  // constructor(private userService: UserService) {
  //   this.signUpForm = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl()
  //   });
  // }

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    // Reactive form
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.signUpForm.reset();
  }

  ngOnInit(): void {
    this.signUpForm.reset();
  }

  public onSubmit() {
    const newUser = this.signUpForm.value;
    this.userService.addUser(newUser);

    // Closing modal window and reseting form if user exists by pressing button submit (create account)
    if (this.userService.userExist === false) {
      this.signUpForm.reset();
      this.closebutton.nativeElement.click();
    } else {
      this.signUpForm.reset();
    }
  }
}
