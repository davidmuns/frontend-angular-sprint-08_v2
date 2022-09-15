import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[];
  private usersSubject$: Subject<IUser[]>;
  userExist: boolean;
  isUserValidated: boolean;
  user!: IUser;

  constructor() {
    this.users = [];
    this.usersSubject$ = new Subject();
    this.userExist = false;
    this.isUserValidated = false;

  }

  public checkIfUserExists(user: IUser): boolean {
    this.user = user;
    let checks = 0
    this.users.forEach(data => {
      if (this.user.email === data.email && this.user.password === data.password) {
        checks++
      }
    })
    this.userExist = checks != 0 ? true : false;
    if (this.userExist === false) {
      alert('Invalid email or password.')
    } else {
      this.isUserValidated = true;
    }
    return this.userExist;
  }

  public addUser(user: IUser) {
    this.user = user;
    let emailExists: boolean = false;
    this.users.forEach(item => {
      if (item.email === this.user.email) {
        emailExists = true;
      }
    })
    if (emailExists === false) {
      this.users.push(user);
      // changes register
      this.usersSubject$.next(this.users);
      this.userExist = false;
      this.isUserValidated = true;
    } else {
      alert(`email ${this.user.email} already exists`)
      this.userExist = true;
      this.isUserValidated = false;
    }
  }
  public getUsers$(): Observable<IUser[]> {
    // event emiter
    return this.usersSubject$.asObservable();
  }
}
