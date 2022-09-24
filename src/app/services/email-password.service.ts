import { ResetPasswordDto } from './../models/reset-password-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailDto } from '../models/email-dto';
import { Mensaje } from '../models/mensaje';

const EMAIL_PASSWORD_URL = environment.EMAIL_PASSWORD_URL;

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordService {

  constructor(private httpClient: HttpClient) { }

  public sendEmail(emailDto: EmailDto): Observable<any> {
    return this.httpClient.post<any>(EMAIL_PASSWORD_URL + 'send', emailDto);
  }

  public resetPassword(resetPasswordDto: ResetPasswordDto): Observable<Mensaje> {
    return this.httpClient.post<Mensaje>(EMAIL_PASSWORD_URL + 'reset', resetPasswordDto);
  }
}