import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from './../models/INuevoUsuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from './../models/ILoginUsuario';
import { JwtDto } from '../models/jwt-dto';

const AUTH_URL = environment.AUTH_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userExist!: boolean;
  private isUserValidated!: boolean;
  private user!: any;
  

  constructor(
    private toastr: ToastrService,
    private httpClient: HttpClient
  ) {
    this.isUserValidated = false;
  }

  public getUser(): any {
    return this.user;
  }

  public getUserExist(): boolean {
    return this.userExist;
  }

  public setUserExist(condition: boolean): void {
    this.userExist = condition;
  }

  public getIsUserValidated(): boolean {
    return this.isUserValidated;
  }

  public setIsUserValidated(condition: boolean): void {
    this.isUserValidated = condition;
  }

  public setUsuario(nuevoUsuario: NuevoUsuario): Observable<any> {
    this.user = nuevoUsuario;
    return this.httpClient.post<any>(AUTH_URL + 'nuevo', nuevoUsuario);
  }

  public setLogin(loginUsuario: LoginUsuario): Observable<JwtDto> {
    this.isUserValidated = true;
    this.user = loginUsuario;
    return this.httpClient.post<JwtDto>(AUTH_URL + 'login', loginUsuario);
  }
}


