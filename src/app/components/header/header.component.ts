import { Router } from '@angular/router';
import { IUser } from './../../models/iuser';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: IUser[];

  constructor(public readonly userService: UserService, private router: Router) {
    this.users = [];
  }

  ngOnInit(): void {

    // Getting updated user list
    this.userService.getUsers$().subscribe(
      users => {
        this.users = users;
      }
    )
  }

  public onLogout() {
    this.userService.isUserValidated = false;
    this.router.navigate([''])
  }

}
