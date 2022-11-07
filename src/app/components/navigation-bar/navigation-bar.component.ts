import { TokenService } from './../../services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(public readonly userService: UserService, private router: Router, public tokenService: TokenService) { }

  ngOnInit(): void {
  }
  gotoShips(){
    this.router.navigate(['starship/all'])
  }

}