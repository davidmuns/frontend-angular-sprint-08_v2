import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[];
  private userExist: boolean;
  private isUserValidated: boolean;

  constructor(private toastr: ToastrService) {
    this.users = [];
    this.userExist = false;
    this.isUserValidated = false;
  }

  public getUserExist(): boolean{
    return this.userExist;
  }

  public getIsUserValidated(): boolean{
    return this.isUserValidated;
  }

  public setIsUserValidated(condition: boolean){
    this.isUserValidated = condition;
  }

  public checkIfUserExists(user: IUser): boolean {
    let checks = 0
    this.users.forEach(data => {
      if (user.email === data.email && user.password === data.password) {
        checks++
      }
    })
    this.userExist = checks != 0 ? true : false;
    if (this.userExist === false) {
      this.toastr.error('Invalid email or password.', '', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
    } else {
      this.toastr.success(`Welcome again ${user.email}!`, '', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.isUserValidated = true;
    }
    return this.userExist;
  }

  public addUser(user: IUser) {
    let emailExists: boolean = false;
    this.users.forEach(item => {
      if (item.email === user.email) {
        emailExists = true;
      }
    })
    if (emailExists === false) {
      this.users.push(user);
      this.toastr.success(`Welcome again ${user.email}!`, '', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.userExist = false;
      this.isUserValidated = true;
    } else {
      this.toastr.error(`email ${user.email} already exists`, '', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.userExist = true;
      this.isUserValidated = false;
    }
  }
}
