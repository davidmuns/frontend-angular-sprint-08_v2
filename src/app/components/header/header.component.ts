import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public readonly userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public onLogout() {
    this.toastr.warning('May the Force be with you..', '', {
      timeOut: 5000, positionClass: 'toast-top-center'
    });
    this.userService.setIsUserValidated(false);
    window.localStorage.clear();
    this.router.navigate(['']);
  }
}
