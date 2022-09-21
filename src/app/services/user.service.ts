import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[];
  private userExist: boolean;
  private isUserValidated: boolean;
  private user!: IUser;

  constructor(private toastr: ToastrService) {
    this.users = [];
    this.userExist = false;
    this.isUserValidated = false;
  }

  public getUser(): IUser {
    return this.user;
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
    // https://itelisoft.com/como-utilizar-el-localstorage-en-angula/
    this.users = JSON.parse(localStorage.getItem('users')!);
    this.users.forEach(data => {
      if (user.email === data.email && user.password === data.password) {
        checks++
      }
    })
    this.userExist = checks != 0 ? true : false;
    if (this.userExist === false) {
      this.toastr.error('We do not recognize the user name or password. Try again or create an account.', '', {
        timeOut: 5000, positionClass: 'toast-top-center'
      });
    } else {
      this.toastr.success(`Welcome again ${user.email}!`, '', {
        timeOut: 5000, positionClass: 'toast-top-center'
      });
      this.user = user;
      this.isUserValidated = true;
    }
    return this.userExist;
  }

  public addUser(user: IUser) {
    let emailExists: boolean = false;

    // https://itelisoft.com/como-utilizar-el-localstorage-en-angula/

    this.users = JSON.parse(localStorage.getItem('users')!);
    if(this.users != null){
      this.users.forEach(item => {
        if (item.email === user.email) {
          emailExists = true;
        }
      });
    }else{
      this.users = [];
    }

    if (emailExists === false) {
      this.users.push(user);
      window.localStorage.setItem('users', JSON.stringify(this.users));
      this.toastr.success(`Welcome ${user.email}!`, '', {
        timeOut: 5000, positionClass: 'toast-top-center'
      });
      this.userExist = false;
      this.isUserValidated = true;
      this.user = user;
    } else {
      this.toastr.error(`email ${user.email} already exists`, '', {
        timeOut: 5000, positionClass: 'toast-top-center'
      });
      this.userExist = true;
      this.isUserValidated = false;
    }
  }
}


