import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  src!: string;
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(
    public readonly userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  public onLogout() {
    this.toastr.warning('May the Force be with you..', '', {
      timeOut: 5000, positionClass: 'toast-top-center'
    });
    this.userService.setIsUserValidated(false);
    window.localStorage.clear();
    this.router.navigate(['']);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if(this.getScreenWidth > 767){
      this.src = "../../../assets/star-wars-logo.png";
    }else{
      this.src = "../../../assets/logo-starwars-mobil.jpg";
    }
  }
}
